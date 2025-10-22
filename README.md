# bun-webhook

Ringkasan singkat

Project ini menyediakan server webhook sederhana yang berjalan di Bun dan mendengarkan beberapa endpoint di bawah /api/webhook/. Server mengekspor dan mengembalikan payload JSON yang dikirim klien (untuk tujuan pengujian). Cocok dipakai sebagai contoh atau stub webhook.

Persyaratan

- Bun (disarankan versi terbaru). Pasang dari https://bun.sh
- Node.js tidak diperlukan untuk menjalankan proyek ini.

Instalasi

```bash
bun install
```

Menjalankan server

Server mendengarkan pada port 3003 secara default.

```bash
bun run index.ts
```

Endpoint (ringkasan)

- GET /api/webhook/api
  - Response: { "msg": "micin" }
- POST /api/webhook/api
  - Echo: mengembalikan JSON { "created": true, ...body }

Selain itu ada banyak endpoint webhook untuk keperluan pengujian, misalnya:
- /api/webhook/rp
- /api/webhook/po
- /api/webhook/pur
- /api/webhook/pur-inv
- /api/webhook/pur-pay
- /api/webhook/pur-ret
- /api/webhook/pur-cor
- /api/webhook/so
- /api/webhook/sales
- /api/webhook/sales-inv
- /api/webhook/sales-pay
- /api/webhook/sales-ret
- /api/webhook/sales-cor
- /api/webhook/mutasi
- /api/webhook/cor-stock
- /api/webhook/akun
- /api/webhook/produk
- /api/webhook/supplier
- /api/webhook/customer

Kebanyakan endpoint bertingkah sama:
- GET -> { "msg": "micin" }
- POST -> membaca body JSON, mencatat body & headers ke console, lalu merespon JSON yang menyertakan { "created": true, ...body } (beberapa endpoint menyertakan field code di body respons, mis. code: 201 atau 401 pada /rp).

Contoh penggunaan (curl)

- GET:

```bash
curl -i http://localhost:3003/api/webhook/api
```

- POST (contoh):

```bash
curl -i -X POST http://localhost:3003/api/webhook/po \
  -H 'Content-Type: application/json' \
  -d '{"id":123, "status":"created"}'
```

Catatan penting

- Server ini hanya untuk keperluan testing / stub. Tidak ada autentikasi, validasi payload, atau pembatasan ukuran input.
- Log ditulis ke console dengan pesan informan (bagian teksnya bahasa Indonesia/Jawa: "iki data webhook").
- Respons memasukkan field created dan meng-echo body, namun status HTTP response selalu 200 OK kecuali 404 atau error server.

Meningkatkan README / saran

Beberapa perbaikan yang bisa dibuat:
- Gunakan router terpusat untuk mengurangi duplikasi kode.
- Tambahkan validasi body dan autentikasi jika digunakan di lingkungan produksi.
- Gunakan status HTTP yang sesuai (mis. 201) alih-alih memasukkan code di body respons.
- Tambahkan contoh tests (Postman collection atau skrip curl otomatis).

Lisensi

Project ini tidak mencantumkan lisensi — tambahkan LICENSE jika perlu.
