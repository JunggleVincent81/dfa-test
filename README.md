# DFA Lab

Aplikasi pengujian Deterministic Finite Automata berbahasa Indonesia.
HTML, CSS, dan JavaScript murni. Tidak memerlukan instalasi dependency atau proses build.

## Fitur
- Editor state, alfabet, state awal, state penerima, dan tabel transisi.
- Diagram SVG otomatis dengan penanda state aktif dan transisi terakhir.
- Pengujian satu string, per langkah, banyak string, dan string kosong.
- Validasi DFA serta simbol input.
- Empat contoh DFA, panduan belajar, simpan lokal, impor/ekspor JSON.
- Layout responsif untuk HP dan laptop.

## Jalankan lokal
Buka index.html di browser, atau gunakan server statis:

```bash
python -m http.server 8080
```

Buka http://localhost:8080. Server statis disarankan agar penyimpanan browser konsisten.

## Pengujian
Dengan Node.js terpasang:

```bash
node test.cjs
```

2.044 pengujian string biner dibandingkan empat aturan bahasa independen sampai panjang 8, ditambah kasus validasi, Unicode, epsilon, simbol invalid, dan F kosong.

## Publikasi
Ikuti PANDUAN-GITHUB-PAGES.md. Semua file aplikasi berada di root agar dapat langsung dipublikasikan dari branch main, folder / (root).

## Batas
Maksimal 16 state, 8 simbol alfabet, dan satu karakter Unicode per simbol. Aplikasi ini untuk DFA, tanpa NFA, epsilon-transition, atau minimisasi. Konfigurasi tersimpan pada browser masing-masing. Font Google bersifat opsional dengan fallback font sistem.
