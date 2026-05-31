<?php

$projectRoot = realpath(__DIR__ . '/..');
$assetRoot = realpath($projectRoot . '/assets/img');
$force = in_array('--force', $argv, true);
$quality = 82;

if (!$assetRoot || !function_exists('imagewebp')) {
    fwrite(STDERR, "GD WebP tidak tersedia.\n");
    exit(1);
}

$maxWidthByFolder = [
    'about' => 1400,
    'blog' => 1400,
    'contact' => 1400,
    'hero' => 1200,
    'lookbook' => 1100,
    'products' => 1200,
];

$report = [
    'converted' => [],
    'skipped' => [],
    'failed' => [],
    'sourceBytes' => 0,
    'webpBytes' => 0,
];

function normalize_path(string $path): string
{
    return str_replace('\\', '/', $path);
}

function relative_path(string $root, string $path): string
{
    return normalize_path(substr($path, strlen($root) + 1));
}

function max_width_for(string $relative, array $map): int
{
    $parts = explode('/', $relative);
    return $map[$parts[1] ?? ''] ?? 1400;
}

function create_source_image(string $path, string $mime)
{
    if ($mime === 'image/jpeg') {
        return @imagecreatefromjpeg($path);
    }

    if ($mime === 'image/png') {
        $image = @imagecreatefrompng($path);
        if ($image) {
            imagepalettetotruecolor($image);
            imagealphablending($image, true);
            imagesavealpha($image, true);
        }
        return $image;
    }

    return false;
}

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($assetRoot, FilesystemIterator::SKIP_DOTS)
);

foreach ($iterator as $file) {
    if (!$file->isFile()) {
        continue;
    }

    $sourcePath = $file->getPathname();
    $extension = strtolower($file->getExtension());
    if (!in_array($extension, ['jpg', 'jpeg', 'png'], true)) {
        continue;
    }

    $relative = relative_path($projectRoot, $sourcePath);
    if (basename($sourcePath) === 'logo.png') {
        $report['skipped'][] = ['file' => $relative, 'reason' => 'logo tetap PNG'];
        continue;
    }

    $targetPath = preg_replace('/\.(jpe?g|png)$/i', '.webp', $sourcePath);
    $targetRelative = relative_path($projectRoot, $targetPath);
    $sourceSize = filesize($sourcePath) ?: 0;
    $report['sourceBytes'] += $sourceSize;

    if (!$force && file_exists($targetPath) && filemtime($targetPath) >= filemtime($sourcePath)) {
        $webpSize = filesize($targetPath) ?: 0;
        $report['webpBytes'] += $webpSize;
        $report['skipped'][] = ['file' => $targetRelative, 'reason' => 'sudah terbaru'];
        continue;
    }

    $size = @getimagesize($sourcePath);
    if (!$size) {
        $report['failed'][] = ['file' => $relative, 'reason' => 'bukan image valid'];
        continue;
    }

    [$width, $height] = $size;
    $maxWidth = max_width_for($relative, $maxWidthByFolder);
    $targetWidth = min($width, $maxWidth);
    $targetHeight = (int) round($height * ($targetWidth / $width));

    $mime = $size['mime'] ?? '';
    $sourceImage = create_source_image($sourcePath, $mime);
    if (!$sourceImage) {
        $report['failed'][] = ['file' => $relative, 'reason' => "gagal membaca image ($mime)"];
        continue;
    }

    $targetImage = imagecreatetruecolor($targetWidth, $targetHeight);
    imagealphablending($targetImage, false);
    imagesavealpha($targetImage, true);
    $transparent = imagecolorallocatealpha($targetImage, 255, 255, 255, 127);
    imagefilledrectangle($targetImage, 0, 0, $targetWidth, $targetHeight, $transparent);

    imagecopyresampled(
        $targetImage,
        $sourceImage,
        0,
        0,
        0,
        0,
        $targetWidth,
        $targetHeight,
        $width,
        $height
    );

    $ok = imagewebp($targetImage, $targetPath, $quality);
    imagedestroy($sourceImage);
    imagedestroy($targetImage);

    if (!$ok) {
        $report['failed'][] = ['file' => $relative, 'reason' => 'gagal menulis webp'];
        continue;
    }

    $webpSize = filesize($targetPath) ?: 0;
    $report['webpBytes'] += $webpSize;
    $report['converted'][] = [
        'source' => $relative,
        'webp' => $targetRelative,
        'sourceBytes' => $sourceSize,
        'webpBytes' => $webpSize,
        'width' => $targetWidth,
        'height' => $targetHeight,
    ];
}

$report['summary'] = [
    'converted' => count($report['converted']),
    'skipped' => count($report['skipped']),
    'failed' => count($report['failed']),
    'sourceBytes' => $report['sourceBytes'],
    'webpBytes' => $report['webpBytes'],
    'savedBytes' => max(0, $report['sourceBytes'] - $report['webpBytes']),
];

file_put_contents(
    $projectRoot . '/assets/img/asset-report.json',
    json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL
);

echo "webp: {$report['summary']['converted']} dikonversi, {$report['summary']['skipped']} dilewati, {$report['summary']['failed']} gagal. Report: assets/img/asset-report.json\n";
if ($report['summary']['failed'] > 0) {
    exit(1);
}
