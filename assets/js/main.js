const whatsappNumber = "6281333418777";
const dataVersion = "20260601-footer-category-lookbook";
const productsPerPage = 8;
const categoryAliases = {
  All: "Semua",
  Semua: "Semua",
  Batik: "Kemeja",
  "Custom Wear": "Luaran",
  "Produk Kustom": "Luaran",
  Outer: "Luaran",
  Luaran: "Luaran",
  Hoodie: "Luaran",
  Jaket: "Luaran",
  Tracksuit: "Luaran",
  Jersey: "Jersi",
  Jersi: "Jersi",
  Polo: "Kaos",
  "Celana Pendek": "Celana",
  "Celana Panjang": "Celana",
  Topi: "Aksesoris",
  "Kaos Kaki": "Aksesoris",
  Ransel: "Aksesoris",
  "Tas Olahraga": "Aksesoris",
  "Tote Bag": "Aksesoris",
  "Tas Jinjing": "Aksesoris",
  "Hand Band": "Aksesoris",
  "Gelang Tangan": "Aksesoris",
  Lanyard: "Aksesoris",
  "Tali ID": "Aksesoris",
  "Botol Minum": "Aksesoris",
  PDL: "Seragam",
  PDH: "Seragam",
  Korsa: "Seragam",
  Wearpack: "Seragam",
  "Jas Lab": "Seragam",
  "Rompi Safety": "Seragam",
  "Celana Cargo": "Celana",
  "Celana Tactical": "Celana",
  "Jersey Bola": "Jersi",
  "Jersey Voli": "Jersi",
  "Jersi Basket": "Jersi",
  "Jersi Futsal": "Jersi",
  "Jersi Badminton": "Jersi",
  "Jersi Sepeda": "Jersi",
  "Jersi Lari": "Jersi",
  "Jersi Esports": "Jersi",
  "Tas Selempang": "Aksesoris",
  "Tas Pinggang": "Aksesoris",
  "Bucket Hat": "Aksesoris",
  Buff: "Aksesoris",
};

const fallbackProducts = [
  {
    "id": 1,
    "name": "Kaos Dasar Premium",
    "category": "Kaos",
    "price": "Rp85.000",
    "image": "assets/img/products/kaos-basic-1.webp",
    "gallery": [
      "assets/img/products/kaos-basic-1.webp",
      "assets/img/products/kaos-basic-2.webp",
      "assets/img/products/kaos-basic-3.webp"
    ],
    "label": "Terlaris",
    "description": "Kaos basic dengan bahan nyaman untuk aktivitas harian.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Cokelat"
    ]
  },
  {
    "id": 2,
    "name": "Kemeja Kasual Cokelat",
    "category": "Kemeja",
    "price": "Rp165.000",
    "image": "assets/img/products/kemeja-brown-1.webp",
    "gallery": [
      "assets/img/products/kemeja-brown-1.webp",
      "assets/img/products/kemeja-brown-2.webp",
      "assets/img/products/kemeja-brown-3.webp"
    ],
    "label": "Produk Baru",
    "description": "Kemeja kasual warna cokelat dengan potongan rapi untuk aktivitas semi formal.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Cokelat",
      "Krem",
      "Hitam"
    ]
  },
  {
    "id": 3,
    "name": "Jersi Tim Kustom",
    "category": "Jersi",
    "price": "Rp120.000",
    "image": "assets/img/products/jersey-team-1.webp",
    "gallery": [
      "assets/img/products/jersey-team-1.webp",
      "assets/img/products/jersey-team-2.webp",
      "assets/img/products/jersey-team-3.webp"
    ],
    "label": "Kustom",
    "description": "Jersi kustom untuk tim olahraga, komunitas, dan acara internal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Emas"
    ]
  },
  {
    "id": 4,
    "name": "Luaran Kanvas Ringan",
    "category": "Luaran",
    "price": "Rp210.000",
    "image": "assets/img/products/outer-canvas-1.webp",
    "gallery": [
      "assets/img/products/outer-canvas-1.webp",
      "assets/img/products/outer-canvas-2.webp",
      "assets/img/products/outer-canvas-3.webp"
    ],
    "label": "Produk Baru",
    "description": "Luaran ringan dengan bahan kanvas untuk tampilan santai yang tetap berkarakter.",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Khaki",
      "Cokelat",
      "Krem"
    ]
  },
  {
    "id": 5,
    "name": "Batik Modern Pria",
    "category": "Kemeja",
    "price": "Rp185.000",
    "image": "assets/img/products/batik-modern-1.webp",
    "gallery": [
      "assets/img/products/batik-modern-1.webp",
      "assets/img/products/batik-modern-2.webp",
      "assets/img/products/batik-modern-3.webp"
    ],
    "label": "Terlaris",
    "description": "Batik modern dengan motif elegan untuk acara formal maupun semi formal.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Cokelat",
      "Emas",
      "Hitam"
    ]
  },
  {
    "id": 6,
    "name": "Seragam Komunitas",
    "category": "Seragam",
    "price": "Mulai Rp150.000",
    "image": "assets/img/products/seragam-komunitas-1.webp",
    "gallery": [
      "assets/img/products/seragam-komunitas-1.webp",
      "assets/img/products/seragam-komunitas-2.webp",
      "assets/img/products/seragam-komunitas-3.webp",
      "assets/img/products/seragam-komunitas-4.webp"
    ],
    "label": "Kustom",
    "description": "Seragam komunitas dengan desain yang bisa disesuaikan identitas kelompok.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Oranye",
      "Hitam",
      "Cokelat"
    ]
  },
  {
    "id": 7,
    "name": "Jaket Hoodie Gaya Jalanan",
    "category": "Luaran",
    "price": "Rp225.000",
    "image": "assets/img/products/hoodie-streetwear-1.webp",
    "gallery": [
      "assets/img/products/hoodie-streetwear-1.webp",
      "assets/img/products/hoodie-streetwear-2.webp",
      "assets/img/products/hoodie-streetwear-3.webp"
    ],
    "label": "Produk Baru",
    "description": "Jaket hoodie bergaya jalanan dengan siluet santai dan detail kustom untuk gaya harian.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Cokelat",
      "Oranye"
    ]
  },
  {
    "id": 8,
    "name": "Tas Jinjing",
    "category": "Aksesoris",
    "price": "Rp65.000",
    "image": "assets/img/products/totebag-fashion-1.webp",
    "gallery": [
      "assets/img/products/totebag-fashion-1.webp",
      "assets/img/products/totebag-fashion-2.webp",
      "assets/img/products/totebag-fashion-3.webp"
    ],
    "label": "Penawaran Terbaik",
    "description": "Tas jinjing untuk aktivitas harian, acara, dan cendera mata komunitas.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Emas",
      "Krem",
      "Cokelat"
    ]
  },
  {
    "id": 9,
    "name": "Polo Kustom",
    "category": "Kaos",
    "price": "Rp135.000",
    "image": "assets/img/products/polo-shirt-1.webp",
    "gallery": [
      "assets/img/products/polo-shirt-1.webp",
      "assets/img/products/polo-shirt-2.webp",
      "assets/img/products/polo-shirt-3.webp"
    ],
    "label": "Produk Baru",
    "description": "Polo dengan detail rapi untuk seragam, komunitas, acara, dan aktivitas semi formal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Kustom"
    ]
  },
  {
    "id": 10,
    "name": "Setelan Olahraga Kasual",
    "category": "Luaran",
    "price": "Rp245.000",
    "image": "assets/img/products/tracksuit-1.webp",
    "gallery": [
      "assets/img/products/tracksuit-1.webp",
      "assets/img/products/tracksuit-2.webp",
      "assets/img/products/tracksuit-3.webp"
    ],
    "label": "Kustom",
    "description": "Setelan olahraga kasual dengan aksen warna berkarakter untuk tim, komunitas, dan aktivitas luar ruang.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Emas"
    ]
  },
  {
    "id": 11,
    "name": "Topi Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "image": "assets/img/products/topi-1.webp",
    "gallery": [
      "assets/img/products/topi-1.webp",
      "assets/img/products/topi-2.webp",
      "assets/img/products/topi-3.webp"
    ],
    "label": "Kustom",
    "description": "Topi kustom untuk komunitas, acara, cendera mata, dan kebutuhan promosi merek.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Kustom"
    ]
  },
  {
    "id": 12,
    "name": "Kaos Kaki Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "image": "assets/img/products/kaos-kaki-1.webp",
    "gallery": [
      "assets/img/products/kaos-kaki-1.webp",
      "assets/img/products/kaos-kaki-2.webp",
      "assets/img/products/kaos-kaki-3.webp"
    ],
    "label": "Kustom",
    "description": "Kaos kaki kustom untuk kebutuhan olahraga, komunitas, dan cendera mata.",
    "sizes": [
      "Semua Ukuran"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Kustom"
    ]
  },
  {
    "id": 13,
    "name": "Celana Pendek Kasual",
    "category": "Celana",
    "price": "Hubungi Kami",
    "image": "assets/img/products/celana-pendek-1.webp",
    "gallery": [
      "assets/img/products/celana-pendek-1.webp",
      "assets/img/products/celana-pendek-2.webp",
      "assets/img/products/celana-pendek-3.webp"
    ],
    "label": "Kustom",
    "description": "Celana pendek kasual untuk aktivitas harian, olahraga ringan, dan kebutuhan komunitas.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Biru Tua",
      "Kustom"
    ]
  },
  {
    "id": 14,
    "name": "Celana Panjang Kasual",
    "category": "Celana",
    "price": "Hubungi Kami",
    "image": "assets/img/products/celana-panjang-1.webp",
    "gallery": [
      "assets/img/products/celana-panjang-1.webp",
      "assets/img/products/celana-panjang-2.webp",
      "assets/img/products/celana-panjang-3.webp"
    ],
    "label": "Kustom",
    "description": "Celana panjang kasual dengan opsi kustom untuk seragam, acara, dan aktivitas harian.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Krem",
      "Kustom"
    ]
  },
  {
    "id": 15,
    "name": "Ransel Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "image": "assets/img/products/ransel-1.webp",
    "gallery": [
      "assets/img/products/ransel-1.webp",
      "assets/img/products/ransel-2.webp",
      "assets/img/products/ransel-3.webp"
    ],
    "label": "Kustom",
    "description": "Ransel kustom untuk sekolah, komunitas, kantor, promosi, dan cendera mata merek.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Biru Tua",
      "Kustom"
    ]
  },
  {
    "id": 16,
    "name": "Tas Olahraga",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "image": "assets/img/products/tas-olahraga-1.webp",
    "gallery": [
      "assets/img/products/tas-olahraga-1.webp",
      "assets/img/products/tas-olahraga-2.webp",
      "assets/img/products/tas-olahraga-3.webp"
    ],
    "label": "Kustom",
    "description": "Tas olahraga kustom untuk tim, komunitas, sekolah, dan acara olahraga.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Kustom"
    ]
  },
  {
    "id": 17,
    "name": "Gelang Tangan Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "image": "assets/img/products/hand-band-1.webp",
    "gallery": [
      "assets/img/products/hand-band-1.webp",
      "assets/img/products/hand-band-2.webp",
      "assets/img/products/hand-band-3.webp"
    ],
    "label": "Kustom",
    "description": "Gelang tangan kustom untuk acara, komunitas, olahraga, dan identitas merek.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Kustom"
    ]
  },
  {
    "id": 18,
    "name": "Tali ID Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "image": "assets/img/products/lanyard-1.webp",
    "gallery": [
      "assets/img/products/lanyard-1.webp",
      "assets/img/products/lanyard-2.webp",
      "assets/img/products/lanyard-3.webp"
    ],
    "label": "Kustom",
    "description": "Tali ID kustom untuk kantor, sekolah, acara, panitia, dan cendera mata promosi.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Kustom"
    ]
  },
  {
    "id": 19,
    "name": "Botol Minum Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "image": "assets/img/products/botol-minum-1.webp",
    "gallery": [
      "assets/img/products/botol-minum-1.webp",
      "assets/img/products/botol-minum-2.webp",
      "assets/img/products/botol-minum-3.webp"
    ],
    "label": "Kustom",
    "description": "Botol minum kustom untuk suvenir, acara, komunitas, kantor, dan kebutuhan promosi.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Kustom"
    ]
  },
  {
    "id": 20,
    "name": "Kaos Lengan Panjang",
    "category": "Kaos",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Kaos lengan panjang untuk kebutuhan harian, komunitas, acara, dan promosi merek.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Kustom"
    ],
    "image": "assets/img/products/kaos-lengan-panjang-1.webp",
    "gallery": [
      "assets/img/products/kaos-lengan-panjang-1.webp",
      "assets/img/products/kaos-lengan-panjang-2.webp",
      "assets/img/products/kaos-lengan-panjang-3.webp"
    ]
  },
  {
    "id": 21,
    "name": "Kaos Oversize",
    "category": "Kaos",
    "price": "Hubungi Kami",
    "label": "Produk Baru",
    "description": "Kaos oversize dengan potongan santai untuk gaya harian, komunitas, dan produk kustom.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Cokelat"
    ],
    "image": "assets/img/products/kaos-oversize-1.webp",
    "gallery": [
      "assets/img/products/kaos-oversize-1.webp",
      "assets/img/products/kaos-oversize-2.webp",
      "assets/img/products/kaos-oversize-3.webp"
    ]
  },
  {
    "id": 22,
    "name": "Kemeja Kerja",
    "category": "Kemeja",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Kemeja kerja rapi untuk kantor, usaha, panitia, dan seragam tim.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Krem"
    ],
    "image": "assets/img/products/kemeja-kerja-1.webp",
    "gallery": [
      "assets/img/products/kemeja-kerja-1.webp",
      "assets/img/products/kemeja-kerja-2.webp",
      "assets/img/products/kemeja-kerja-3.webp"
    ]
  },
  {
    "id": 23,
    "name": "Kemeja Flanel",
    "category": "Kemeja",
    "price": "Hubungi Kami",
    "label": "Produk Baru",
    "description": "Kemeja flanel untuk tampilan kasual yang hangat, rapi, dan mudah dipadukan.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Merah",
      "Cokelat",
      "Kustom"
    ],
    "image": "assets/img/products/kemeja-flanel-1.webp",
    "gallery": [
      "assets/img/products/kemeja-flanel-1.webp",
      "assets/img/products/kemeja-flanel-2.webp",
      "assets/img/products/kemeja-flanel-3.webp"
    ]
  },
  {
    "id": 24,
    "name": "Jaket Bomber",
    "category": "Luaran",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jaket bomber untuk komunitas, seragam usaha, acara, dan identitas merek.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Biru Tua",
      "Kustom"
    ],
    "image": "assets/img/products/jaket-bomber-1.webp",
    "gallery": [
      "assets/img/products/jaket-bomber-1.webp",
      "assets/img/products/jaket-bomber-2.webp",
      "assets/img/products/jaket-bomber-3.webp"
    ]
  },
  {
    "id": 25,
    "name": "Jaket Varsity",
    "category": "Luaran",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jaket varsity untuk komunitas, sekolah, kampus, dan koleksi identitas kelompok.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Krem",
      "Kustom"
    ],
    "image": "assets/img/products/jaket-varsity-1.webp",
    "gallery": [
      "assets/img/products/jaket-varsity-1.webp",
      "assets/img/products/jaket-varsity-2.webp",
      "assets/img/products/jaket-varsity-3.webp"
    ]
  },
  {
    "id": 26,
    "name": "Jaket Coach",
    "category": "Luaran",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jaket coach ringan untuk tim, komunitas, dan kegiatan luar ruang.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Biru Tua",
      "Kustom"
    ],
    "image": "assets/img/products/jaket-coach-1.webp",
    "gallery": [
      "assets/img/products/jaket-coach-1.webp",
      "assets/img/products/jaket-coach-2.webp",
      "assets/img/products/jaket-coach-3.webp"
    ]
  },
  {
    "id": 27,
    "name": "Rompi Kustom",
    "category": "Luaran",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Rompi kustom untuk panitia, komunitas, lapangan kerja, dan kebutuhan identitas acara.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Kustom"
    ],
    "image": "assets/img/products/rompi-kustom-1.webp",
    "gallery": [
      "assets/img/products/rompi-kustom-1.webp",
      "assets/img/products/rompi-kustom-2.webp",
      "assets/img/products/rompi-kustom-3.webp"
    ]
  },
  {
    "id": 28,
    "name": "Celana Jogger",
    "category": "Celana",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Celana jogger untuk aktivitas santai, olahraga ringan, dan kebutuhan komunitas.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Biru Tua",
      "Kustom"
    ],
    "image": "assets/img/products/celana-jogger-1.webp",
    "gallery": [
      "assets/img/products/celana-jogger-1.webp",
      "assets/img/products/celana-jogger-2.webp",
      "assets/img/products/celana-jogger-3.webp"
    ]
  },
  {
    "id": 29,
    "name": "Celana Training",
    "category": "Celana",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Celana training untuk tim olahraga, sekolah, komunitas, dan aktivitas harian.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Kustom"
    ],
    "image": "assets/img/products/celana-training-1.webp",
    "gallery": [
      "assets/img/products/celana-training-1.webp",
      "assets/img/products/celana-training-2.webp",
      "assets/img/products/celana-training-3.webp"
    ]
  },
  {
    "id": 30,
    "name": "Seragam Kerja",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Seragam kerja untuk kantor, toko, usaha, tim lapangan, dan kebutuhan operasional.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Cokelat",
      "Kustom"
    ],
    "image": "assets/img/products/seragam-kerja-1.webp",
    "gallery": [
      "assets/img/products/seragam-kerja-1.webp",
      "assets/img/products/seragam-kerja-2.webp",
      "assets/img/products/seragam-kerja-3.webp"
    ]
  },
  {
    "id": 31,
    "name": "Almamater Kustom",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Almamater kustom untuk sekolah, kampus, organisasi, dan komunitas resmi.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Biru Tua",
      "Hijau",
      "Kustom"
    ],
    "image": "assets/img/products/almamater-kustom-1.webp",
    "gallery": [
      "assets/img/products/almamater-kustom-1.webp",
      "assets/img/products/almamater-kustom-2.webp",
      "assets/img/products/almamater-kustom-3.webp"
    ]
  },
  {
    "id": 32,
    "name": "Apron Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Apron kustom untuk kafe, dapur, usaha kuliner, acara, dan kebutuhan promosi.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Cokelat",
      "Kustom"
    ],
    "image": "assets/img/products/apron-kustom-1.webp",
    "gallery": [
      "assets/img/products/apron-kustom-1.webp",
      "assets/img/products/apron-kustom-2.webp",
      "assets/img/products/apron-kustom-3.webp"
    ]
  },
  {
    "id": 33,
    "name": "Pouch Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Pouch kustom untuk cendera mata, acara, komunitas, dan paket promosi merek.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Krem",
      "Kustom"
    ],
    "image": "assets/img/products/pouch-kustom-1.webp",
    "gallery": [
      "assets/img/products/pouch-kustom-1.webp",
      "assets/img/products/pouch-kustom-2.webp",
      "assets/img/products/pouch-kustom-3.webp"
    ]
  },
  {
    "id": 34,
    "name": "PDL Kustom",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Pakaian Dinas Lapangan kustom untuk instansi, organisasi, komunitas, dan tim operasional.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Khaki",
      "Hijau",
      "Biru Tua",
      "Kustom"
    ],
    "image": "assets/img/products/pdl-kustom-1.webp",
    "gallery": [
      "assets/img/products/pdl-kustom-1.webp",
      "assets/img/products/pdl-kustom-2.webp",
      "assets/img/products/pdl-kustom-3.webp"
    ]
  },
  {
    "id": 35,
    "name": "PDH Kustom",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Pakaian Dinas Harian kustom dengan tampilan rapi untuk kantor, instansi, dan organisasi.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Putih",
      "Khaki",
      "Biru Tua",
      "Kustom"
    ],
    "image": "assets/img/products/pdh-kustom-1.webp",
    "gallery": [
      "assets/img/products/pdh-kustom-1.webp",
      "assets/img/products/pdh-kustom-2.webp",
      "assets/img/products/pdh-kustom-3.webp"
    ]
  },
  {
    "id": 36,
    "name": "Celana Cargo Pendek",
    "category": "Celana",
    "price": "Hubungi Kami",
    "label": "Produk Baru",
    "description": "Celana cargo pendek untuk aktivitas lapangan, komunitas, dan gaya kasual yang praktis.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Khaki",
      "Hijau",
      "Kustom"
    ],
    "image": "assets/img/products/celana-cargo-pendek-1.webp",
    "gallery": [
      "assets/img/products/celana-cargo-pendek-1.webp",
      "assets/img/products/celana-cargo-pendek-2.webp",
      "assets/img/products/celana-cargo-pendek-3.webp"
    ]
  },
  {
    "id": 37,
    "name": "Celana Cargo Panjang",
    "category": "Celana",
    "price": "Hubungi Kami",
    "label": "Produk Baru",
    "description": "Celana cargo panjang dengan kantong fungsional untuk kebutuhan harian, outdoor, dan tim lapangan.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Khaki",
      "Hijau",
      "Kustom"
    ],
    "image": "assets/img/products/celana-cargo-panjang-1.webp",
    "gallery": [
      "assets/img/products/celana-cargo-panjang-1.webp",
      "assets/img/products/celana-cargo-panjang-2.webp",
      "assets/img/products/celana-cargo-panjang-3.webp"
    ]
  },
  {
    "id": 38,
    "name": "Celana Tactical",
    "category": "Celana",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Celana tactical untuk kebutuhan lapangan, komunitas outdoor, keamanan, dan operasional.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Hijau Army",
      "Biru Tua",
      "Kustom"
    ],
    "image": "assets/img/products/celana-tactical-1.webp",
    "gallery": [
      "assets/img/products/celana-tactical-1.webp",
      "assets/img/products/celana-tactical-2.webp",
      "assets/img/products/celana-tactical-3.webp"
    ]
  },
  {
    "id": 39,
    "name": "Jersey Bola",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersey bola kustom untuk klub, sekolah, komunitas, turnamen, dan event olahraga.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Merah",
      "Biru",
      "Kustom"
    ],
    "image": "assets/img/products/jersey-bola-1.webp",
    "gallery": [
      "assets/img/products/jersey-bola-1.webp",
      "assets/img/products/jersey-bola-2.webp",
      "assets/img/products/jersey-bola-3.webp"
    ]
  },
  {
    "id": 40,
    "name": "Jersey Voli",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersey voli kustom dengan bahan nyaman untuk latihan, pertandingan, dan identitas tim.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Biru",
      "Kustom"
    ],
    "image": "assets/img/products/jersey-voli-1.webp",
    "gallery": [
      "assets/img/products/jersey-voli-1.webp",
      "assets/img/products/jersey-voli-2.webp",
      "assets/img/products/jersey-voli-3.webp"
    ]
  },
  {
    "id": 41,
    "name": "Jersi Basket",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersi basket kustom untuk tim, sekolah, komunitas, dan kompetisi olahraga.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Putih",
      "Merah",
      "Kustom"
    ],
    "image": "assets/img/products/jersi-basket-1.webp",
    "gallery": [
      "assets/img/products/jersi-basket-1.webp",
      "assets/img/products/jersi-basket-2.webp",
      "assets/img/products/jersi-basket-3.webp"
    ]
  },
  {
    "id": 42,
    "name": "Jersi Futsal",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersi futsal kustom untuk tim kecil, turnamen, komunitas, dan acara olahraga.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Biru",
      "Oranye",
      "Kustom"
    ],
    "image": "assets/img/products/jersi-futsal-1.webp",
    "gallery": [
      "assets/img/products/jersi-futsal-1.webp",
      "assets/img/products/jersi-futsal-2.webp",
      "assets/img/products/jersi-futsal-3.webp"
    ]
  },
  {
    "id": 43,
    "name": "Jersi Badminton",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersi badminton kustom yang ringan untuk klub, sekolah, turnamen, dan komunitas olahraga.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Hijau",
      "Kuning",
      "Kustom"
    ],
    "image": "assets/img/products/jersi-badminton-1.webp",
    "gallery": [
      "assets/img/products/jersi-badminton-1.webp",
      "assets/img/products/jersi-badminton-2.webp",
      "assets/img/products/jersi-badminton-3.webp"
    ]
  },
  {
    "id": 44,
    "name": "Jersi Sepeda",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersi sepeda kustom untuk komunitas gowes, event, dan identitas tim bersepeda.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Biru",
      "Kustom"
    ],
    "image": "assets/img/products/jersi-sepeda-1.webp",
    "gallery": [
      "assets/img/products/jersi-sepeda-1.webp",
      "assets/img/products/jersi-sepeda-2.webp",
      "assets/img/products/jersi-sepeda-3.webp"
    ]
  },
  {
    "id": 45,
    "name": "Jersi Lari",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersi lari kustom untuk komunitas running, event fun run, dan tim olahraga.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Putih",
      "Hitam",
      "Hijau",
      "Kustom"
    ],
    "image": "assets/img/products/jersi-lari-1.webp",
    "gallery": [
      "assets/img/products/jersi-lari-1.webp",
      "assets/img/products/jersi-lari-2.webp",
      "assets/img/products/jersi-lari-3.webp"
    ]
  },
  {
    "id": 46,
    "name": "Jersi Esports",
    "category": "Jersi",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jersi esports kustom untuk tim gaming, komunitas, event, dan merchandise brand.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Hitam",
      "Ungu",
      "Biru",
      "Kustom"
    ],
    "image": "assets/img/products/jersi-esports-1.webp",
    "gallery": [
      "assets/img/products/jersi-esports-1.webp",
      "assets/img/products/jersi-esports-2.webp",
      "assets/img/products/jersi-esports-3.webp"
    ]
  },
  {
    "id": 47,
    "name": "Korsa Kustom",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Korsa kustom untuk organisasi, kampus, komunitas, panitia, dan identitas kelompok.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Biru Tua",
      "Hitam",
      "Marun",
      "Kustom"
    ],
    "image": "assets/img/products/korsa-kustom-1.webp",
    "gallery": [
      "assets/img/products/korsa-kustom-1.webp",
      "assets/img/products/korsa-kustom-2.webp",
      "assets/img/products/korsa-kustom-3.webp"
    ]
  },
  {
    "id": 48,
    "name": "Wearpack Kustom",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Wearpack kustom untuk bengkel, teknisi, produksi, komunitas otomotif, dan tim lapangan.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Biru Tua",
      "Oranye",
      "Hitam",
      "Kustom"
    ],
    "image": "assets/img/products/wearpack-kustom-1.webp",
    "gallery": [
      "assets/img/products/wearpack-kustom-1.webp",
      "assets/img/products/wearpack-kustom-2.webp",
      "assets/img/products/wearpack-kustom-3.webp"
    ]
  },
  {
    "id": 49,
    "name": "Jas Lab Kustom",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Jas lab kustom untuk sekolah, kampus, klinik, laboratorium, dan kebutuhan institusi.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Putih",
      "Biru Muda",
      "Kustom"
    ],
    "image": "assets/img/products/jas-lab-kustom-1.webp",
    "gallery": [
      "assets/img/products/jas-lab-kustom-1.webp",
      "assets/img/products/jas-lab-kustom-2.webp",
      "assets/img/products/jas-lab-kustom-3.webp"
    ]
  },
  {
    "id": 50,
    "name": "Rompi Safety",
    "category": "Seragam",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Rompi safety untuk lapangan, panitia, proyek, event, dan kebutuhan operasional luar ruang.",
    "sizes": [
      "Satu Ukuran",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Oranye",
      "Kuning",
      "Hijau Stabilo",
      "Kustom"
    ],
    "image": "assets/img/products/rompi-safety-1.webp",
    "gallery": [
      "assets/img/products/rompi-safety-1.webp",
      "assets/img/products/rompi-safety-2.webp",
      "assets/img/products/rompi-safety-3.webp"
    ]
  },
  {
    "id": 51,
    "name": "Tas Selempang Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Tas selempang kustom untuk komunitas, promosi, merchandise, dan aktivitas harian.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Cokelat",
      "Kustom"
    ],
    "image": "assets/img/products/tas-selempang-kustom-1.webp",
    "gallery": [
      "assets/img/products/tas-selempang-kustom-1.webp",
      "assets/img/products/tas-selempang-kustom-2.webp",
      "assets/img/products/tas-selempang-kustom-3.webp"
    ]
  },
  {
    "id": 52,
    "name": "Tas Pinggang Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Tas pinggang kustom untuk event, komunitas, perjalanan, dan merchandise brand.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Biru Tua",
      "Kustom"
    ],
    "image": "assets/img/products/tas-pinggang-kustom-1.webp",
    "gallery": [
      "assets/img/products/tas-pinggang-kustom-1.webp",
      "assets/img/products/tas-pinggang-kustom-2.webp",
      "assets/img/products/tas-pinggang-kustom-3.webp"
    ]
  },
  {
    "id": 53,
    "name": "Bucket Hat Kustom",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Bucket hat kustom untuk komunitas, event, merchandise, dan gaya kasual.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Krem",
      "Kustom"
    ],
    "image": "assets/img/products/bucket-hat-kustom-1.webp",
    "gallery": [
      "assets/img/products/bucket-hat-kustom-1.webp",
      "assets/img/products/bucket-hat-kustom-2.webp",
      "assets/img/products/bucket-hat-kustom-3.webp"
    ]
  },
  {
    "id": 54,
    "name": "Buff Multifungsi",
    "category": "Aksesoris",
    "price": "Hubungi Kami",
    "label": "Kustom",
    "description": "Buff multifungsi kustom untuk olahraga, komunitas motor, event, dan aktivitas luar ruang.",
    "sizes": [
      "Satu Ukuran"
    ],
    "colors": [
      "Hitam",
      "Oranye",
      "Kustom"
    ],
    "image": "assets/img/products/buff-multifungsi-1.webp",
    "gallery": [
      "assets/img/products/buff-multifungsi-1.webp",
      "assets/img/products/buff-multifungsi-2.webp",
      "assets/img/products/buff-multifungsi-3.webp"
    ]
  }
];

const fallbackPosts = [
  {
    "id": 1,
    "title": "5 Tips Memilih Kaos yang Nyaman untuk Aktivitas Harian",
    "category": "Tips Busana",
    "date": "12 Januari 2026",
    "image": "assets/img/blog/blog-1.webp",
    "excerpt": "Panduan memilih kaos harian yang nyaman dari bahan, ukuran, jahitan, warna, sampai fungsi pemakaian.",
    "content": [
      "Kaos menjadi salah satu pakaian paling praktis dan sering digunakan dalam kehidupan sehari-hari. Mulai dari bersantai di rumah, bekerja santai, nongkrong, olahraga ringan, hingga kegiatan komunitas, kaos selalu menjadi pilihan yang mudah dipadukan dengan berbagai gaya berpakaian.",
      "Namun, memilih kaos tidak cukup hanya melihat desain atau warnanya saja. Kenyamanan, bahan, ukuran, jahitan, dan fungsi pemakaian juga perlu diperhatikan agar kaos benar-benar enak dipakai sepanjang hari.",
      "Berikut lima tips memilih kaos yang nyaman untuk aktivitas harian.",
      "1. Pilih Bahan yang Adem dan Menyerap Keringat",
      "Hal pertama yang perlu diperhatikan adalah bahan kaos. Untuk aktivitas harian, pilih bahan yang terasa adem di kulit, lembut, dan mampu menyerap keringat dengan baik.",
      "Bahan katun sering menjadi pilihan favorit karena nyaman dipakai di cuaca tropis. Selain itu, kaos dengan bahan cotton combed, cotton carded berkualitas, atau campuran katun yang halus juga cocok untuk penggunaan sehari-hari.",
      "Hindari bahan yang terlalu panas, kaku, atau tidak menyerap keringat, karena bisa membuat tubuh cepat gerah dan kurang nyaman saat beraktivitas.",
      "2. Perhatikan Ukuran yang Pas di Badan",
      "Ukuran kaos sangat memengaruhi kenyamanan. Kaos yang terlalu ketat bisa membatasi gerak, sedangkan kaos yang terlalu longgar kadang membuat tampilan terlihat kurang rapi.",
      "Pilih ukuran yang sesuai dengan bentuk tubuh dan kebutuhan. Untuk tampilan kasual, kaos potongan reguler biasanya aman digunakan. Jika ingin gaya lebih santai, potongan longgar bisa menjadi pilihan. Namun, pastikan bagian bahu, panjang badan, dan panjang lengan tetap proporsional.",
      "Sebelum membeli, cek panduan ukuran agar tidak salah ukuran, terutama jika membeli secara daring.",
      "3. Cek Kualitas Jahitan",
      "Kaos yang nyaman bukan hanya ditentukan oleh bahan, tetapi juga kualitas jahitannya. Jahitan yang rapi membuat kaos lebih awet dan tidak mudah berubah bentuk setelah dicuci berkali-kali.",
      "Perhatikan bagian leher, bahu, lengan, dan bawah kaos. Jahitan yang kuat biasanya terlihat rapat, lurus, dan tidak mudah tertarik. Bagian kerah juga sebaiknya tidak terlalu tipis agar tidak cepat melar.",
      "Kaos dengan jahitan rapi akan terasa lebih nyaman dipakai dan terlihat lebih berkualitas.",
      "4. Pilih Warna yang Mudah Dipadukan",
      "Untuk aktivitas harian, warna kaos yang mudah dipadukan akan sangat membantu. Warna netral seperti hitam, putih, abu-abu, biru tua, krem, dan cokelat bisa menjadi pilihan aman karena cocok dipakai dengan celana jeans, chino, cargo, maupun luaran.",
      "Jika ingin tampil lebih berani, pilih warna yang sesuai dengan karakter atau kebutuhan acara. Namun, untuk koleksi dasar, kaos warna netral tetap menjadi pilihan paling fleksibel.",
      "Warna yang tepat membuat kaos lebih mudah digunakan dalam berbagai suasana.",
      "5. Sesuaikan dengan Aktivitas",
      "Setiap aktivitas membutuhkan jenis kaos yang berbeda. Untuk bersantai, pilih kaos yang ringan dan lembut. Untuk aktivitas luar ruangan, pilih bahan yang lebih kuat dan tidak mudah kusut. Untuk acara komunitas atau seragam, pilih kaos dengan bahan yang nyaman sekaligus cocok untuk sablon atau bordir.",
      "Jika kaos akan digunakan untuk kegiatan merek, komunitas, atau acara, pastikan desainnya tidak hanya menarik, tetapi juga nyaman dipakai oleh banyak orang.",
      "Kaos yang baik adalah kaos yang tidak hanya terlihat bagus, tetapi juga mendukung aktivitas pemakainya.",
      "Penutup",
      "Memilih kaos yang nyaman untuk aktivitas harian perlu memperhatikan bahan, ukuran, jahitan, warna, dan fungsi pemakaian. Dengan pilihan yang tepat, kaos bisa menjadi gaya berpakaian sederhana yang tetap nyaman, rapi, dan bergaya.",
      "Tritunggal Lancar Workshop menghadirkan pilihan busana yang nyaman dan berkarakter untuk kebutuhan harian, komunitas, maupun produk kustom. Dengan desain yang fleksibel dan bahan yang nyaman, setiap produk dibuat agar cocok digunakan dalam berbagai aktivitas."
    ]
  },
  {
    "id": 2,
    "title": "Cara Merawat Kaos Sablon Agar Tetap Awet",
    "category": "Perawatan",
    "date": "18 Januari 2026",
    "image": "assets/img/blog/blog-2.webp",
    "excerpt": "Cara mencuci, menjemur, menyetrika, dan menyimpan kaos sablon agar desainnya tetap awet.",
    "content": [
      "Kaos sablon menjadi salah satu pilihan busana yang banyak digemari karena bisa menampilkan desain, identitas merek, komunitas, maupun karakter pemakainya. Selain nyaman dipakai, kaos sablon juga mudah dipadukan dengan berbagai gaya, mulai dari kasual harian sampai gaya berpakaian komunitas.",
      "Namun, agar sablon tetap awet dan tidak cepat retak, luntur, atau mengelupas, cara perawatannya perlu diperhatikan. Banyak kaos sablon cepat rusak bukan karena kualitasnya buruk, tetapi karena proses mencuci, menjemur, atau menyetrika yang kurang tepat.",
      "Berikut beberapa cara merawat kaos sablon agar tetap awet dan nyaman dipakai.",
      "1. Balik Kaos Sebelum Dicuci",
      "Sebelum mencuci, biasakan membalik kaos sehingga bagian sablon berada di dalam. Cara ini membantu melindungi permukaan sablon dari gesekan langsung dengan pakaian lain, dinding mesin cuci, atau sikat.",
      "Gesekan yang terlalu sering bisa membuat sablon perlahan memudar atau retak. Dengan membalik kaos, desain sablon akan lebih terlindungi dan tampilannya bisa bertahan lebih lama.",
      "2. Hindari Menyikat Bagian Sablon",
      "Jika ada noda pada kaos, hindari menyikat langsung bagian sablon. Sikat yang kasar bisa merusak permukaan sablon, terutama jika dilakukan berulang kali.",
      "Untuk membersihkan noda, cukup kucek perlahan menggunakan tangan. Jika noda cukup sulit dihilangkan, rendam sebentar dengan deterjen lembut, lalu bersihkan secara perlahan tanpa menggosok terlalu keras.",
      "3. Gunakan Deterjen Secukupnya",
      "Pemakaian deterjen yang terlalu banyak tidak selalu membuat kaos lebih bersih. Justru, sisa deterjen yang menempel dapat membuat bahan terasa kasar dan warna kaos lebih cepat kusam.",
      "Gunakan deterjen secukupnya dan pilih yang tidak terlalu keras. Hindari juga penggunaan pemutih, terutama untuk kaos berwarna gelap atau kaos dengan desain sablon berwarna.",
      "4. Jangan Rendam Terlalu Lama",
      "Merendam kaos terlalu lama bisa membuat warna kain dan sablon lebih cepat menurun kualitasnya. Untuk kaos sablon, cukup rendam sekitar 10-15 menit jika memang diperlukan.",
      "Jika kaos tidak terlalu kotor, mencuci langsung dengan lembut sudah cukup. Semakin sering kaos direndam terlalu lama, semakin besar kemungkinan warna dan sablon mengalami perubahan.",
      "5. Jemur Kaos dalam Posisi Terbalik",
      "Setelah dicuci, jemur kaos dalam posisi terbalik. Hindari menjemur bagian sablon langsung di bawah sinar matahari terlalu lama.",
      "Paparan matahari yang terlalu kuat dapat membuat warna sablon cepat pudar. Jemur di tempat yang cukup terang dan memiliki sirkulasi udara baik agar kaos cepat kering tanpa merusak permukaan sablon.",
      "6. Hindari Menyetrika Langsung di Atas Sablon",
      "Salah satu kesalahan yang paling sering terjadi adalah menyetrika langsung bagian sablon. Panas setrika bisa membuat sablon lengket, meleleh, retak, atau menempel pada permukaan setrika.",
      "Jika ingin menyetrika kaos sablon, balik kaos terlebih dahulu. Bisa juga menggunakan kain pelapis di atas bagian sablon agar panas tidak mengenai sablon secara langsung.",
      "7. Simpan Kaos dengan Rapi",
      "Penyimpanan juga berpengaruh pada keawetan kaos sablon. Lipat kaos dengan rapi dan hindari menekan bagian sablon terlalu keras, terutama jika sablon berukuran besar.",
      "Jika kaos jarang dipakai, simpan di tempat yang kering dan tidak lembap. Tempat yang lembap bisa membuat kaos berbau tidak sedap dan memengaruhi kualitas bahan.",
      "Penutup",
      "Merawat kaos sablon sebenarnya tidak sulit. Cukup balik kaos saat mencuci, hindari menyikat bagian sablon, gunakan deterjen secukupnya, jangan rendam terlalu lama, jemur dengan benar, dan hindari menyetrika langsung di atas sablon.",
      "Dengan perawatan yang tepat, kaos sablon akan tetap nyaman dipakai, warna lebih tahan lama, dan desainnya tetap terlihat menarik.",
      "Tritunggal Lancar Workshop menghadirkan produk busana dan produk kustom yang dibuat untuk kebutuhan harian, komunitas, maupun acara. Dengan bahan yang nyaman dan desain yang berkarakter, setiap kaos bisa menjadi pilihan tepat untuk tampil rapi dan percaya diri."
    ]
  },
  {
    "id": 3,
    "title": "Inspirasi Gaya Berpakaian Kasual untuk Anak Muda",
    "category": "Inspirasi",
    "date": "26 Januari 2026",
    "image": "assets/img/blog/blog-3.webp",
    "excerpt": "Inspirasi gaya kasual anak muda dari kaos dasar, luaran, jaket hoodie, jersi kustom, sampai batik modern.",
    "content": [
      "Gaya Berpakaian kasual menjadi pilihan favorit anak muda karena mudah dipakai, nyaman, dan tetap bisa terlihat bergaya. Gaya ini cocok untuk berbagai aktivitas, mulai dari kuliah, nongkrong, jalan-jalan, kerja santai, hingga menghadiri acara komunitas.",
      "Kunci dari gaya berpakaian kasual adalah memadukan pakaian yang simpel tetapi tetap rapi. Tidak harus selalu memakai produk busana yang mahal, yang penting adalah pemilihan warna, ukuran, bahan, dan kombinasi gaya berpakaian yang sesuai dengan karakter pemakainya.",
      "Berikut beberapa inspirasi gaya berpakaian kasual untuk anak muda yang bisa kamu coba.",
      "1. Kaos Dasar dan Celana Chino",
      "Kaos dasar adalah produk paling aman untuk gaya kasual. Kamu bisa memilih kaos warna netral seperti hitam, putih, krem, abu-abu, atau cokelat. Warna-warna ini mudah dipadukan dengan berbagai jenis celana.",
      "Agar tampilan terlihat lebih rapi, padukan kaos dasar dengan celana chino. Kombinasi ini cocok untuk aktivitas harian karena tetap nyaman, tetapi tidak terlihat terlalu santai.",
      "Untuk alas kaki, kamu bisa menggunakan sneakers putih, sepatu hitam, atau slip-on sederhana.",
      "2. Kemeja Kasual sebagai Luaran",
      "Kemeja tidak selalu harus dipakai untuk acara formal. Untuk gaya anak muda, kemeja kasual bisa digunakan sebagai luaran dengan dalaman kaos polos.",
      "Contohnya, gunakan kaos putih sebagai dalaman, lalu tambahkan kemeja warna cokelat, olive, hitam, atau krem sebagai lapisan luar. Gaya ini memberi kesan santai, rapi, dan modern.",
      "Gaya Berpakaian seperti ini cocok untuk nongkrong, kuliah, foto produk, atau aktivitas kreatif.",
      "3. Jaket Hoodie untuk Tampilan Gaya Jalanan",
      "Jaket Hoodie menjadi pilihan tepat untuk kamu yang suka tampilan santai dan sedikit gaya jalanan. Pilih jaket hoodie dengan warna netral agar mudah dipadukan, seperti hitam, biru tua, abu tua, atau krem.",
      "Jaket Hoodie bisa dipadukan dengan celana cargo, jogger, atau jeans. Untuk tampilan yang lebih modern, pilih jaket hoodie dengan ukuran sedikit oversized, tetapi tetap proporsional dengan badan.",
      "Gaya ini cocok digunakan saat cuaca agak dingin, jalan-jalan, atau aktivitas santai di luar ruangan.",
      "4. Luaran Kanvas untuk Tampilan Lebih Berkarakter",
      "Luaran kanvas bisa menjadi pilihan jika ingin gaya berpakaian kasual terlihat lebih kuat dan berkarakter. Bahan kanvas biasanya memberi kesan kokoh, maskulin, dan cocok untuk gaya urban.",
      "Kamu bisa memadukan luaran kanvas warna olive atau cokelat dengan kaos putih dan celana hitam. Kombinasi ini sederhana, tetapi terlihat rapi dan bergaya.",
      "Luaran juga bisa membantu membuat tampilan lebih menarik tanpa harus memakai banyak aksesori.",
      "5. Jersi Kustom untuk Komunitas",
      "Jersi tidak hanya cocok untuk olahraga. Sekarang, jersi kustom juga sering dipakai sebagai gaya berpakaian komunitas, acara, atau identitas kelompok.",
      "Dengan desain yang tepat, jersi bisa terlihat modern dan tetap nyaman untuk aktivitas santai. Pilih warna yang kuat, tata letak desain yang tidak terlalu ramai, dan bahan yang adem agar tetap nyaman dipakai.",
      "Jersi kustom cocok untuk komunitas motor, tim olahraga, acara sekolah, organisasi, atau merek lokal.",
      "6. Batik Modern untuk Kasual Formal",
      "Batik tidak selalu harus terlihat resmi. Batik modern dengan potongan yang lebih santai bisa digunakan untuk tampilan kasual formal.",
      "Kamu bisa memilih batik dengan warna gelap, motif simpel, dan desain yang tidak terlalu ramai. Padukan dengan celana chino atau celana bahan agar tetap terlihat rapi.",
      "Gaya ini cocok untuk acara keluarga, pertemuan komunitas, kerja santai, atau acara semi formal.",
      "7. Gunakan Warna yang Selaras",
      "Salah satu cara paling mudah membuat gaya berpakaian terlihat bagus adalah memilih warna yang selaras. Tidak perlu terlalu banyak warna dalam satu tampilan.",
      "Kamu bisa menggunakan kombinasi seperti:\nHitam + krem\nCokelat + putih\nOlive + hitam\nBiru Tua + abu-abu\nKrem + krem muda",
      "Kombinasi warna yang sederhana akan membuat gaya berpakaian terlihat lebih bersih dan mudah dipakai di berbagai suasana.",
      "Penutup",
      "Gaya Berpakaian kasual untuk anak muda tidak harus rumit. Dengan kaos dasar, kemeja kasual, jaket hoodie, luaran kanvas, jersi kustom, atau batik modern, kamu bisa tampil nyaman sekaligus berkarakter.",
      "Yang terpenting adalah memilih bahan yang nyaman, ukuran yang pas, dan warna yang mudah dipadukan. Dengan kombinasi yang tepat, gaya berpakaian sederhana pun bisa terlihat lebih bergaya.",
      "Tritunggal Lancar Workshop menghadirkan pilihan busana untuk kebutuhan harian, komunitas, dan produk kustom. Setiap produk dibuat agar nyaman dipakai dan mudah dipadukan dengan gaya anak muda masa kini."
    ]
  },
  {
    "id": 4,
    "title": "Kenapa Seragam Komunitas Perlu Desain yang Berkarakter?",
    "category": "Produk Kustom",
    "date": "2 Februari 2026",
    "image": "assets/img/blog/blog-4.webp",
    "excerpt": "Alasan seragam komunitas membutuhkan desain kuat agar identitas, kekompakan, dan mereking lebih terlihat.",
    "content": [
      "Seragam komunitas bukan hanya pakaian yang dipakai bersama-sama. Lebih dari itu, seragam menjadi identitas visual yang bisa menunjukkan karakter, kekompakan, dan citra sebuah kelompok. Baik untuk komunitas motor, olahraga, sekolah, organisasi, acara, hingga merek lokal, desain seragam punya peran penting dalam membangun kesan pertama.",
      "Seragam yang dibuat asal-asalan biasanya hanya berfungsi sebagai pakaian. Namun, seragam dengan desain yang berkarakter bisa membuat komunitas terlihat lebih solid, profesional, dan mudah dikenali.",
      "Berikut beberapa alasan kenapa seragam komunitas perlu memiliki desain yang kuat dan berkarakter.",
      "1. Menjadi Identitas Komunitas",
      "Setiap komunitas memiliki cerita, nilai, dan ciri khas masing-masing. Ada komunitas yang ingin terlihat bergaya olahraga, elegan, santai, tegas, kreatif, atau penuh semangat. Semua karakter itu bisa ditampilkan melalui desain seragam.",
      "Warna, logo, tipografi, motif, dan bentuk potongan pakaian dapat membantu memperkuat identitas komunitas. Ketika seragam dipakai, orang lain bisa langsung mengenali kelompok tersebut dari tampilan visualnya.",
      "Desain yang tepat membuat seragam bukan sekadar pakaian, tetapi simbol kebersamaan.",
      "2. Meningkatkan Rasa Kompak",
      "Seragam dapat menciptakan rasa memiliki di antara anggota komunitas. Saat semua anggota memakai pakaian dengan desain yang sama, muncul kesan bahwa mereka adalah bagian dari satu kelompok yang solid.",
      "Rasa kompak ini penting, terutama saat mengikuti acara, gathering, lomba, kegiatan sosial, atau acara tertentu. Dengan seragam yang menarik, anggota komunitas juga biasanya lebih percaya diri saat tampil bersama.",
      "Seragam yang nyaman dan keren membuat anggota merasa bangga memakainya.",
      "3. Membuat Komunitas Lebih Mudah Dikenali",
      "Dalam sebuah acara, sering kali ada banyak kelompok atau peserta yang hadir. Seragam dengan desain yang berkarakter akan membuat komunitas lebih mudah dikenali di tengah keramaian.",
      "Misalnya, komunitas dengan warna khas, logo yang jelas, atau desain yang unik akan lebih mudah terlihat dalam dokumentasi foto maupun video. Ini juga membantu memperkuat mereking komunitas di media sosial.",
      "Semakin mudah dikenali, semakin kuat pula kesan komunitas tersebut di mata orang lain.",
      "4. Meningkatkan Kesan Profesional",
      "Komunitas yang memiliki seragam rapi dan terkonsep biasanya terlihat lebih serius dan profesional. Hal ini penting jika komunitas sering bekerja sama dengan pihak luar, mengikuti acara, menerima sponsor, atau mengadakan kegiatan publik.",
      "Seragam yang baik menunjukkan bahwa komunitas memiliki perhatian terhadap detail. Tidak hanya dari sisi kegiatan, tetapi juga dari sisi tampilan dan citra.",
      "Desain yang rapi dapat membuat komunitas terlihat lebih siap dan terpercaya.",
      "5. Mendukung Mereking di Media Sosial",
      "Di era digital, dokumentasi menjadi bagian penting dari aktivitas komunitas. Foto dan video kegiatan sering diunggah ke Instagram, TikTok, Facebook, website, atau media sosial lainnya.",
      "Seragam yang menarik akan membuat konten komunitas terlihat lebih bagus. Warna yang selaras, desain yang tidak berlebihan, dan logo yang ditempatkan dengan tepat dapat membuat foto terlihat lebih profesional.",
      "Dengan begitu, seragam juga menjadi bagian dari strategi mereking visual komunitas.",
      "6. Membantu Membedakan dari Komunitas Lain",
      "Banyak komunitas memiliki bidang yang sama, tetapi belum tentu memiliki karakter visual yang kuat. Di sinilah desain seragam menjadi pembeda.",
      "Komunitas motor, misalnya, bisa terlihat lebih tegas dengan warna gelap dan aksen kuat. Komunitas kreatif bisa menggunakan desain yang lebih dinamis. Komunitas olahraga bisa memakai bahan dan bentuk yang lebih bergaya olahraga.",
      "Desain yang berkarakter membantu komunitas memiliki ciri khas sendiri.",
      "7. Lebih Cocok untuk Acara dan Cendera Mata",
      "Seragam komunitas juga bisa dikembangkan menjadi cendera mata. Jika desainnya menarik, anggota atau pendukung komunitas bisa tertarik memiliki kaos, jersi, jaket hoodie, tote bag, atau luaran dengan identitas komunitas tersebut.",
      "Artinya, desain seragam yang kuat tidak hanya berguna untuk acara internal, tetapi juga bisa menjadi produk yang bernilai.",
      "Komunitas dapat menggunakan cendera mata sebagai media promosi sekaligus sumber pemasukan tambahan.",
      "Penutup",
      "Seragam komunitas perlu desain yang berkarakter karena berfungsi sebagai identitas, simbol kekompakan, media mereking, dan pembeda dari komunitas lain. Desain yang baik membuat komunitas terlihat lebih solid, profesional, dan mudah dikenali.",
      "Dalam membuat seragam, perhatikan warna, logo, bahan, ukuran, serta kenyamanan pemakai. Jangan hanya fokus pada tampilan, tetapi pastikan seragam juga enak dipakai untuk berbagai aktivitas.",
      "Tritunggal Lancar Workshop menghadirkan layanan busana dan produk kustom untuk kebutuhan komunitas, organisasi, acara, dan merek lokal. Dengan desain yang nyaman, rapi, dan berkarakter, seragam komunitas bisa tampil lebih kuat dan percaya diri."
    ]
  }
];

let products = [];
let posts = [];
let activeCategory = "Semua";
let activeSearch = "";
let activeSort = "featured";
let catalogPage = 1;
let animationObserver = null;

const currencyText = (value) => value || "Hubungi kami";

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const normalizeCategory = (category) => categoryAliases[category] || category || "Semua";

const normalizeArticleBlocks = (content) => {
  if (Array.isArray(content)) {
    return content.map((block) => String(block).trim()).filter(Boolean);
  }

  return String(content || "")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
};

const renderArticleContent = (content) => {
  const blocks = normalizeArticleBlocks(content);

  if (!blocks.length) {
    return "<p>Artikel belum tersedia.</p>";
  }

  return blocks.map((block) => {
    const safeBlock = escapeHtml(block).replaceAll("\n", "<br>");
    const isHeading = block === "Penutup" || /^\d+\.\s+/.test(block);
    return isHeading ? `<h2>${safeBlock}</h2>` : `<p>${safeBlock}</p>`;
  }).join("");
};

const absoluteUrl = (path = "") => {
  try {
    return new URL(path || window.location.pathname, window.location.href).href;
  } catch (error) {
    return path;
  }
};

const setMetaContent = (attribute, key, content) => {
  if (!content) return;
  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.setAttribute("content", content);
};

const setCanonicalUrl = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.append(link);
  }
  link.href = href;
};

const setJsonLd = (id, data) => {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.append(script);
  }
  script.textContent = JSON.stringify(data);
};

const updateBlogSeo = (post) => {
  const title = `${post.title} - Tritunggal Lancar Workshop`;
  const description = post.excerpt || "Baca artikel busana dari Tritunggal Lancar Workshop.";
  const url = absoluteUrl(`blog-detail.html?id=${post.id}`);
  const image = absoluteUrl("assets/img/og-image.jpg");

  document.title = title;
  setCanonicalUrl(url);
  setMetaContent("name", "description", description);
  setMetaContent("property", "og:type", "article");
  setMetaContent("property", "og:title", title);
  setMetaContent("property", "og:description", description);
  setMetaContent("property", "og:url", url);
  setMetaContent("property", "og:image", image);
  setMetaContent("property", "og:image:width", "1200");
  setMetaContent("property", "og:image:height", "630");
  setMetaContent("property", "og:image:type", "image/jpeg");
  setMetaContent("property", "og:image:alt", "Tritunggal Lancar Workshop - Fashion yang Nyaman, Desain yang Berkarakter");
  setMetaContent("name", "twitter:title", title);
  setMetaContent("name", "twitter:description", description);
  setMetaContent("name", "twitter:image", image);
  setMetaContent("name", "twitter:image:alt", "Tritunggal Lancar Workshop - Fashion yang Nyaman, Desain yang Berkarakter");

  setJsonLd("article-jsonld", {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": description,
    "image": image,
    "mainEntityOfPage": url,
    "author": {
      "@type": "Organization",
      "name": "Tritunggal Lancar Workshop"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tritunggal Lancar Workshop",
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl("assets/img/logo.png")
      }
    }
  });
};

const getProductGallery = (product) => {
  const gallery = Array.isArray(product.gallery) ? product.gallery : productGalleryMap[product.id];
  return gallery && gallery.length ? gallery : [product.image];
};

const getWhatsAppUrl = (productName = "", details = {}) => {
  const productLine = productName ? `Produk: ${productName}` : "Produk:";
  const message = [
    "Halo Tritunggal Lancar Workshop, saya mau pesan:",
    productLine,
    `Ukuran: ${details.size || ""}`,
    `Warna: ${details.color || ""}`,
    `Jumlah: ${details.quantity || ""}`,
    `Nama: ${details.customer || ""}`,
    `Alamat: ${details.address || ""}`,
    details.note ? `Catatan: ${details.note}` : ""
  ].filter(Boolean).join("\n");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const parsePriceNumber = (price) => {
  const value = String(price || "").replace(/[^\d]/g, "");
  return value ? Number(value) : Number.MAX_SAFE_INTEGER;
};

const sortProductList = (items) => {
  const sorted = [...items];

  if (activeSort === "price-asc") {
    return sorted.sort((a, b) => parsePriceNumber(a.price) - parsePriceNumber(b.price));
  }

  if (activeSort === "price-desc") {
    return sorted.sort((a, b) => parsePriceNumber(b.price) - parsePriceNumber(a.price));
  }

  if (activeSort === "name") {
    return sorted.sort((a, b) => a.name.localeCompare(b.name, "id"));
  }

  if (activeSort === "category") {
    return sorted.sort((a, b) => a.category.localeCompare(b.category, "id") || a.name.localeCompare(b.name, "id"));
  }

  return sorted;
};

const fetchJson = async (url, fallback) => {
  try {
    const separator = url.includes("?") ? "&" : "?";
    const response = await fetch(`${url}${separator}v=${dataVersion}`);
    if (!response.ok) {
      throw new Error(`Gagal memuat ${url}`);
    }
    return await response.json();
  } catch (error) {
    return fallback;
  }
};

const setupNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!menu.classList.contains("is-open")) return;
      if (event.target.closest(".nav-menu") || event.target.closest(".nav-toggle")) return;
      closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  document.querySelectorAll("[data-wa-general]").forEach((link) => {
    link.href = getWhatsAppUrl();
    link.target = "_blank";
    link.rel = "noopener";
  });
};

const productCard = (product) => `
  <article class="product-card">
    <div class="product-image">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">
      <span>${escapeHtml(product.label)}</span>
    </div>
    <div class="product-body">
      <p class="product-category">${escapeHtml(product.category)}</p>
      <h3>${escapeHtml(product.name)}</h3>
      <strong>${escapeHtml(currencyText(product.price))}</strong>
      <div class="product-actions">
        <button class="btn btn-ghost" type="button" data-detail-product="${product.id}">Detail</button>
        <a class="btn btn-primary" href="${getWhatsAppUrl(product.name)}" target="_blank" rel="noopener">Pesan</a>
      </div>
    </div>
  </article>
`;

const renderFeaturedProducts = () => {
  const target = document.querySelector("[data-featured-products]");
  if (!target) return;
  target.innerHTML = products.slice(0, 4).map(productCard).join("");
  registerAnimatedElements(target);
};

const renderCatalogPagination = (totalPages) => {
  const pagination = document.querySelector("[data-catalog-pagination]");
  if (!pagination) return;

  if (totalPages <= 1) {
    pagination.hidden = true;
    pagination.innerHTML = "";
    return;
  }

  pagination.hidden = false;
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === catalogPage;
    return `<button class="pagination-btn ${isActive ? "active" : ""}" type="button" data-catalog-page="${page}" ${isActive ? 'aria-current="page"' : ""}>${page}</button>`;
  }).join("");

  pagination.innerHTML = `
    <button class="pagination-btn pagination-arrow" type="button" data-catalog-page="${catalogPage - 1}" ${catalogPage === 1 ? "disabled" : ""}>Sebelumnya</button>
    <div class="pagination-pages">${pageButtons}</div>
    <button class="pagination-btn pagination-arrow" type="button" data-catalog-page="${catalogPage + 1}" ${catalogPage === totalPages ? "disabled" : ""}>Berikutnya</button>
  `;

  pagination.querySelectorAll("[data-catalog-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = Number(button.dataset.catalogPage);
      if (!nextPage || nextPage === catalogPage) return;
      catalogPage = Math.min(Math.max(nextPage, 1), totalPages);
      renderCatalogProducts();
      document.querySelector("[data-catalog-products]")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
};

const renderCatalogProducts = () => {
  const target = document.querySelector("[data-catalog-products]");
  if (!target) return;

  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
    const query = activeSearch.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const sortedProducts = sortProductList(filtered);
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / productsPerPage));
  catalogPage = Math.min(Math.max(catalogPage, 1), totalPages);
  const startIndex = (catalogPage - 1) * productsPerPage;
  const visibleProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);
  const endIndex = startIndex + visibleProducts.length;

  target.innerHTML = visibleProducts.map(productCard).join("");
  registerAnimatedElements(target);

  const count = document.querySelector("[data-product-count]");
  if (count) {
    count.textContent = sortedProducts.length
      ? `Menampilkan ${startIndex + 1}-${endIndex} dari ${sortedProducts.length} produk`
      : "0 produk ditemukan";
  }

  const empty = document.querySelector("[data-empty-products]");
  if (empty) {
    empty.hidden = sortedProducts.length > 0;
  }

  renderCatalogPagination(totalPages);
};

const setupCatalogFilters = () => {
  const searchInput = document.querySelector("[data-product-search]");
  const sortSelect = document.querySelector("[data-product-sort]");
  const filterButtons = document.querySelectorAll("[data-filter-category]");

  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");
  if (categoryParam) {
    activeCategory = normalizeCategory(categoryParam);
  }

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filterCategory === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = normalizeCategory(button.dataset.filterCategory);
      catalogPage = 1;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderCatalogProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      activeSearch = event.target.value.trim();
      catalogPage = 1;
      renderCatalogProducts();
    });
  }

  if (sortSelect) {
    sortSelect.value = activeSort;
    sortSelect.addEventListener("change", (event) => {
      activeSort = event.target.value;
      catalogPage = 1;
      renderCatalogProducts();
    });
  }
};

const getProductOrderDetails = (form) => {
  const data = new FormData(form);
  return {
    size: data.get("size") || "",
    color: data.get("color") || "",
    quantity: data.get("quantity") || "",
    customer: data.get("customer") || "",
    address: data.get("address") || "",
    note: data.get("note") || ""
  };
};

const updateModalOrderLink = (form) => {
  const product = products.find((item) => item.id === Number(form.dataset.productId));
  const link = form.querySelector("[data-modal-order-link]");
  if (!product || !link) return;
  link.href = getWhatsAppUrl(product.name, getProductOrderDetails(form));
};

const openProductModal = (productId) => {
  const product = products.find((item) => item.id === Number(productId));
  const modal = document.querySelector("[data-product-modal]");
  const content = document.querySelector("[data-modal-content]");
  if (!product || !modal || !content) return;
  const initialDetails = {
    size: product.sizes[0] || "",
    color: product.colors[0] || "",
    quantity: "1"
  };
  const gallery = getProductGallery(product);
  const selectedImage = gallery[0] || product.image;
  const thumbnailMarkup = gallery.length > 1 ? `
    <div class="modal-thumbs" aria-label="Galeri produk">
      ${gallery.map((image, index) => `
        <button class="modal-thumb ${index === 0 ? "active" : ""}" type="button" data-modal-thumb="${escapeHtml(image)}" aria-label="Lihat gambar produk ${index + 1}">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)} ${index + 1}" loading="lazy" decoding="async">
        </button>
      `).join("")}
    </div>
  ` : "";

  content.innerHTML = `
    <div class="modal-product">
      <div class="modal-gallery">
        <img class="modal-main-image" src="${escapeHtml(selectedImage)}" alt="${escapeHtml(product.name)}" loading="eager" decoding="async">
        ${thumbnailMarkup}
      </div>
      <div>
        <p class="product-category">${escapeHtml(product.category)}</p>
        <h2>${escapeHtml(product.name)}</h2>
        <strong>${escapeHtml(currencyText(product.price))}</strong>
        <p>${escapeHtml(product.description)}</p>
        <div class="modal-tags">
          <span>Ukuran: ${product.sizes.map(escapeHtml).join(", ")}</span>
          <span>Warna: ${product.colors.map(escapeHtml).join(", ")}</span>
        </div>
        <form class="modal-order-form" data-modal-order-form data-product-id="${product.id}">
          <div class="form-row">
            <label>
              Ukuran
              <select name="size">
                ${product.sizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join("")}
              </select>
            </label>
            <label>
              Warna
              <select name="color">
                ${product.colors.map((color) => `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="form-row">
            <label>
              Jumlah
              <input name="quantity" type="number" min="1" value="1">
            </label>
            <label>
              Nama
              <input name="customer" type="text" placeholder="Nama pemesan">
            </label>
          </div>
          <label>
            Alamat
            <textarea name="address" rows="2" placeholder="Alamat pengiriman"></textarea>
          </label>
          <label>
            Catatan
            <textarea name="note" rows="2" placeholder="Contoh: logo kustom, warna alternatif, tenggat produksi"></textarea>
          </label>
          <a class="btn btn-primary" data-modal-order-link href="${getWhatsAppUrl(product.name, initialDetails)}" target="_blank" rel="noopener">Pesan melalui WhatsApp</a>
        </form>
      </div>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  content.querySelectorAll("[data-modal-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.dataset.modalThumb;
      const mainImage = content.querySelector(".modal-main-image");
      if (!image || !mainImage) return;
      mainImage.src = image;
      content.querySelectorAll("[data-modal-thumb]").forEach((item) => item.classList.toggle("active", item === button));
    });
  });
};

const closeProductModal = () => {
  const modal = document.querySelector("[data-product-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const setupProductModal = () => {
  document.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-detail-product]");
    if (detailButton) {
      openProductModal(detailButton.dataset.detailProduct);
    }

    if (event.target.closest("[data-close-modal]")) {
      closeProductModal();
    }
  });

  document.addEventListener("input", (event) => {
    const form = event.target.closest("[data-modal-order-form]");
    if (form) {
      updateModalOrderLink(form);
    }
  });

  document.addEventListener("change", (event) => {
    const form = event.target.closest("[data-modal-order-form]");
    if (form) {
      updateModalOrderLink(form);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProductModal();
    }
  });
};

const blogCard = (post) => `
  <article class="blog-card">
    <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" loading="lazy" decoding="async">
    <div class="blog-body">
      <p class="blog-meta">${escapeHtml(post.category)} / ${escapeHtml(post.date)}</p>
      <h2>${escapeHtml(post.title)}</h2>
      <p>${escapeHtml(post.excerpt)}</p>
      <a class="text-link" href="blog-detail.html?id=${post.id}">Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </article>
`;

const homeBlogCard = (post) => `
  <article class="home-blog-card">
    <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" loading="lazy" decoding="async">
    <div class="home-blog-body">
      <p class="blog-meta">${escapeHtml(post.date)} / ${escapeHtml(post.category)}</p>
      <h3>${escapeHtml(post.title)}</h3>
      <a class="text-link" href="blog-detail.html?id=${post.id}">Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </article>
`;

const renderHomePosts = () => {
  const target = document.querySelector("[data-home-posts]");
  if (!target) return;
  target.innerHTML = posts.slice(0, 4).map(homeBlogCard).join("");
  registerAnimatedElements(target);
};

const renderBlogPosts = () => {
  const target = document.querySelector("[data-blog-posts]");
  if (!target) return;
  target.innerHTML = posts.map(blogCard).join("");
  registerAnimatedElements(target);
};

const renderBlogDetail = () => {
  const target = document.querySelector("[data-blog-detail]");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const post = posts.find((item) => item.id === id) || posts[0];
  updateBlogSeo(post);

  target.innerHTML = `
    <a class="back-link" href="blog.html"><i class="fa-solid fa-arrow-left"></i> Kembali ke Artikel</a>
    <img class="article-cover" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" loading="eager" decoding="async" fetchpriority="high">
    <p class="blog-meta">${escapeHtml(post.category)} / ${escapeHtml(post.date)}</p>
    <h1>${escapeHtml(post.title)}</h1>
    <div class="article-content">${renderArticleContent(post.content)}</div>
  `;
  registerAnimatedElements(target);

  const recentTarget = document.querySelector("[data-recent-posts]");
  if (recentTarget) {
    recentTarget.innerHTML = posts
      .filter((item) => item.id !== post.id)
      .slice(0, 3)
      .map((item) => `
        <a class="recent-post" href="blog-detail.html?id=${item.id}">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async">
          <span>${escapeHtml(item.title)}</span>
        </a>
      `)
      .join("");
    registerAnimatedElements(recentTarget);
  }
};

const setupContactForm = () => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const message = data.get("message") || "";
    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    alert("Pesan berhasil disiapkan.");
    window.location.href = `mailto:kustomofamily@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
};

const setupFloatingActions = () => {
  if (document.querySelector(".floating-actions")) return;

  const actions = document.createElement("div");
  actions.className = "floating-actions";
  actions.innerHTML = `
    <a class="floating-btn floating-whatsapp" href="${getWhatsAppUrl()}" target="_blank" rel="noopener" aria-label="Pesan WhatsApp">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
    <button class="floating-btn floating-top" type="button" aria-label="Kembali ke atas">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  `;

  document.body.appendChild(actions);
  const topButton = actions.querySelector(".floating-top");

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const syncTopButton = () => {
    topButton.classList.toggle("is-visible", window.scrollY > 420);
  };

  window.addEventListener("scroll", syncTopButton, { passive: true });
  syncTopButton();
};

const setupLookbookSlider = () => {
  const slider = document.querySelector("[data-lookbook-slider]");
  if (!slider) return;

  const track = slider.querySelector("[data-lookbook-track]");
  const viewport = slider.querySelector(".lookbook-viewport");
  const slides = [...slider.querySelectorAll(".lookbook-slide")];
  const prev = slider.querySelector("[data-lookbook-prev]");
  const next = slider.querySelector("[data-lookbook-next]");
  const dotsTarget = slider.querySelector("[data-lookbook-dots]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = 0;
  let timer = null;

  if (!track || slides.length === 0) return;

  if (dotsTarget) {
    dotsTarget.innerHTML = slides
      .map((_, index) => `<button type="button" aria-label="Tampilkan slide ${index + 1}" data-lookbook-dot="${index}"></button>`)
      .join("");
  }

  const dots = dotsTarget ? [...dotsTarget.querySelectorAll("[data-lookbook-dot]")] : [];

  const render = () => {
    const firstSlide = slides[0];
    const slideRect = firstSlide.getBoundingClientRect();
    const slideStyles = window.getComputedStyle(firstSlide);
    const slideWidth = slideRect.width + parseFloat(slideStyles.marginRight || "0");
    track.style.transform = `translate3d(-${activeIndex * slideWidth}px, 0, 0)`;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
      dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
    });
  };

  const goToSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    render();
  };

  const stop = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  const start = () => {
    if (reduceMotion || timer) return;
    timer = window.setInterval(() => {
      goToSlide(activeIndex + 1);
    }, 3600);
  };

  prev?.addEventListener("click", () => {
    goToSlide(activeIndex - 1);
    stop();
    start();
  });

  next?.addEventListener("click", () => {
    goToSlide(activeIndex + 1);
    stop();
    start();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(Number(dot.dataset.lookbookDot || 0));
      stop();
      start();
    });
  });

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });
  window.addEventListener("resize", render);

  render();
  start();
};

const registerAnimatedElements = (root = document) => {
  const selectors = [
    ".section-heading",
    ".category-card",
    ".product-card",
    ".benefit-card",
    ".story-card",
    ".stat-card",
    ".lookbook-slider",
    ".order-panel",
    ".faq-panel",
    ".testimonial-card",
    ".blog-card",
    ".article-detail",
    ".article-sidebar",
    ".contact-card",
    ".contact-form",
    ".map-embed-card",
    ".size-table-wrap",
    ".size-note",
    ".cta-wrap"
  ].join(",");

  const elements = root.querySelectorAll ? root.querySelectorAll(selectors) : [];

  elements.forEach((element, index) => {
    if (element.dataset.animationReady === "true") return;
    element.dataset.animationReady = "true";
    element.classList.add("animate-on-scroll");
    element.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 70}ms`);

    if (animationObserver) {
      animationObserver.observe(element);
    } else {
      element.classList.add("is-visible");
    }
  });
};

const setupScrollAnimations = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    document.documentElement.classList.add("reduced-motion");
    registerAnimatedElements(document);
    return;
  }

  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      animationObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px"
  });

  registerAnimatedElements(document);

  window.setTimeout(() => {
    document.querySelectorAll(".animate-on-scroll:not(.is-visible)").forEach((element) => {
      element.classList.add("is-visible");
      if (animationObserver) {
        animationObserver.unobserve(element);
      }
    });
  }, 900);
};

const initData = async () => {
  const [productData, postData] = await Promise.all([
    fetchJson("data/products.json", fallbackProducts),
    fetchJson("data/posts.json", fallbackPosts)
  ]);

  products = productData;
  posts = postData;

  renderFeaturedProducts();
  setupCatalogFilters();
  renderCatalogProducts();
  renderHomePosts();
  renderBlogPosts();
  renderBlogDetail();
};

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupScrollAnimations();
  setupProductModal();
  setupContactForm();
  setupFloatingActions();
  setupLookbookSlider();
  initData();
});
