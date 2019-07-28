# Rest API pencarian film menggunakan Axios

## Konfigurasi awal

Install dependensi npm 

```
npm i
```

Buat file .env berisi parameter API_KEY yang berisi api key moviedb. Jika belum punya api bisa generate menggunakan petunjuk di https://developers.themoviedb.org/3/getting-started/introduction

Start fastify server 

```
npm run start
```

Secara default API endpoint bisa diakses melalui localhost di port 3000

## List Endpoint

- `/search/{nama_movie}/` : Pencarian nama movie menggunakan query `nama_movie`