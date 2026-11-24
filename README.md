# Al Muttaqin Kids — Petualangan Kampung Al-Muttaqin (v5.0 Full 3D Assets)

Aplikasi web game edukasi interaktif ramah anak resmi milik **Majelis Ta'lim Al Muttaqin** berbasis **HTML5, CSS3, dan Vanilla JavaScript** (*zero-build*, ringan, responsif desktop & ponsel, siap tayang langsung di **GitHub Pages**).

## Fitur Utama v5.0

1. **Peta Interaktif 3D Kampung Al-Muttaqin (6 Lokasi)**
   - Pin interaktif di atas peta diorama 3D: **Musholla Al-Muttaqin (LOC-01, 1 lantai)**, **Rumah Keluarga (LOC-02)**, **Sekolah & Studio Mengaji (LOC-03)**, **Taman & Tempat Wudhu (LOC-04)**, **Saung Ilmu Kampung (LOC-05)**, dan **Pasar Berkah Kampung (LOC-06)**.
   - Sistem pembangunan & peningkatan 3 tahap menggunakan **Biji Kebaikan** dengan penyimpanan otomatis (`localStorage`) dan *Parent Gate* anti-reset tak sengaja.
2. **Mode 1 — Jejak Kebaikan Kampung (5 Level Sortir Cepat)**
   - **Lv.1**: 7 Air Mutlaq vs Bukan Air Mutlaq (Thaharah).
   - **Lv.2**: Adab di Musholla Al-Muttaqin.
   - **Lv.3**: Adab di Rumah bersama Abi & Umi.
   - **Lv.4**: Adab Berteman & Bermain.
   - **Lv.5**: Amanah & Kejujuran di Pasar Berkah.
   - Mendukung ketukan tombol wadah besar, geser sentuh (*touch swipe*), dan panah keyboard (`ArrowLeft` / `ArrowRight`).
3. **Mode 2 — Petualangan 6 Klaster Kurikulum (KLA-01 s/d KLA-06)**
   - 12 modul terkurasi dengan dalil/doa Arab berharakat besar + arti Bahasa Indonesia (tanpa transliterasi Latin) dan kotak peringatan edukatif **"Awas Keliru!"**.
4. **Mode 3 — Studio Hijaiyah Kak Zahra (28 Huruf Lengkap)**
   - Papan lengkap 28 huruf hijaiyah (`ا`–`ي`) dengan sakelar harakat live (**Fathah, Kasrah, Dhammah**), contoh mufradat, pelafalan audio (Web Speech API + sintesis nada), dan **Mini-Kuis Tebak Huruf**.
5. **Mode 4 — Ujian Bintang "MUMTAZ!" & Rapor Dewan Asatidz**
   - 10 soal terstruktur sesuai **Matriks 100 Poin Dewan Asatidz** (*Teori 20 • Tahfidz 35 • Praktik 30 • Adab 15*), anugerah **Medali Rub el Hizb**, dan fitur **Cetak / Simpan PDF Rapor**.

## Struktur Repositori

```text
al-muttaqin-kids/
├── index.html                                 # Aplikasi utama (HTML5 + CSS3 + JS)
├── manifest.webmanifest                       # Dukungan Add-to-Home-Screen (PWA)
├── README.md                                  # Dokumentasi proyek
├── ASSET_MANIFEST.md                          # Daftar & status audit aset visual v1.2
├── .nojekyll                                  # Bypass Jekyll di GitHub Pages
└── assets/
    ├── logo-majelis.svg                       # Emblem geometris fallback (ganti dengan logo.png master)
    ├── MAM_CHR_ALQOSAM_3QFRONT_V1.2.jpg       # Karakter Al Qosam (8 thn)
    ├── MAM_CHR_ZAHRA_3QFRONT_V1.2.jpg         # Karakter Kak Zahra (11 thn, hijab dusty pink)
    ├── MAM_CHR_ABI_3QFRONT_V1.2.jpg           # Karakter Abi (40 thn)
    ├── MAM_CHR_UMI_3QFRONT_V1.2.jpg           # Karakter Umi (36 thn, hijab hijau sage - Audit F-01)
    ├── MAM_LOC01_MUSHOLLA_EXTFRONT_V1.2.jpg   # Eksterior Musholla Al-Muttaqin 1 lantai (Audit F-02/F-03)
    ├── MAM_WORLD_MAP_KAMPUNG_6LOC_V1.2.jpg    # Peta Dunia Diorama 6 Lokasi
    ├── MAM_UI_REWARD_MEDAL_SEEDS_V1.2.jpg     # Emblem Medali Rub el Hizb & Biji Kebaikan
    ├── MAM_PRP_MUSHAF_REHAL_V1.2.jpg          # Ikon 3D Mushaf di Rehal
    ├── MAM_PRP_SAJADAH_V1.2.jpg               # Ikon 3D Sajadah Hijau Emas
    ├── MAM_PRP_TAS_BUKU_V1.2.jpg              # Ikon 3D Tas & Buku Belajar
    └── MAM_PRP_KENDI_AIR_MUTLAQ_V1.2.jpg      # Ikon 3D Kendi Air Mutlaq
```

## Memasang Logo Master Resmi & Aset Batch-2 Opsional (Tanpa Edit Kode!)

Aplikasi sudah memiliki *smart fallback* otomatis. Anda cukup menaruh berkas berikut ke folder `assets/` dengan nama persis ini agar langsung aktif:

- **Logo Master Induk (Audit F-06)**: Salin `LOGO_AL_MUTTAQIN_MASTER_RESOLUSI_2000PX_TRANSPARAN.png` dari Google Drive Anda lalu beri nama **`assets/logo.png`** (atau `assets/logo.jpg`).
- **Aset Latar Batch-2 (Opsional — sudah siap pakai jika diunduh dari gambar yang dihasilkan)**:
  - `assets/MAM_HERO_BANNER_KAMPUNG_V1.2.jpg` (Banner Hero Al Qosam & Kak Zahra)
  - `assets/MAM_LOC02_RUMAH_INTERIOR_V1.2.jpg` (Interior Rumah Keluarga)
  - `assets/MAM_LOC03_STUDIO_HIJAIYAH_V1.2.jpg` (Ruang Studio Hijaiyah Kak Zahra)
  - `assets/MAM_LOC04_TAMAN_WUDHU_V1.2.jpg` (Taman Bermain & Tempat Wudhu)

## Cara Publikasi ke GitHub Pages (1 Menit)

1. Ekstrak seluruh isi ZIP ini ke folder komputer Anda.
2. Buka repositori GitHub Anda (misal `github.com/ahmadizzuddinalqosam-bot/al-muttaqin-kids`).
3. Unggah seluruh berkas **termasuk folder `assets/`** ke cabang `main`, lalu klik **Commit changes**.
4. Masuk ke **Settings > Pages** -> pilih **Deploy from a branch** -> cabang `main`, folder `/ (root)` -> **Save**.
5. Dalam 1–2 menit, game aktif di `https://ahmadizzuddinalqosam-bot.github.io/al-muttaqin-kids/`.

---
**Majelis Ta'lim Al Muttaqin** — Rawa Buaya, Cengkareng, Jakarta Barat.
