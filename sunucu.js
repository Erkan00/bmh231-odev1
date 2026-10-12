const http = require('http');
const dayjs = require('dayjs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Gelen her isteğin metodunu ve yolunu terminale loglama
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Yalnızca GET yöntemine izin ver (GET dışındakilere 405 dön)
  if (req.method !== 'GET') {
    res.writeHead(405, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Allow': 'GET'
    });
    res.end('Method Not Allowed: Yalnızca GET istekleri desteklenmektedir.');
    return;
  }

  // Yolların (Routes) kontrolü
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <title>Ana Sayfa</title>
      </head>
      <body>
        <h1>BMH231 Web Programlama - Ödev 1</h1>
        <p><a href="/hakkimda">Hakkımda sayfasına git</a></p>
      </body>
      </html>
    `);
  } else if (req.url === '/hakkimda') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <title>Hakkımda</title>
      </head>
      <body>
        <h1>Hakkımda</h1>
        <p>Merhaba! Ben Bilgisayar Mühendisliği öğrencisiyim. Web Programlama dersi kapsamında bu sunucuyu geliştirdim.</p>
        <p><a href="/">Ana Sayfaya Dön</a></p>
      </body>
      </html>
    `);
  } else if (req.url === '/api/ders') {
    const dersBilgisi = {
      kod: 'BMH231',
      ad: 'Web Programlama',
      gun: 'Pazartesi'
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(dersBilgisi, null, 2));
  } else if (req.url === '/api/agep') {
    const hedefTarih = dayjs('2026-11-01');
    const bugun = dayjs();
    const kalanGun = hedefTarih.diff(bugun, 'day');

    const agepBilgisi = {
      etkinlik: 'AGEP Son Teslimi',
      sonTeslimTarihi: '2026-11-01',
      kalanGun: kalanGun >= 0 ? kalanGun : 0
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(agepBilgisi, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Sayfa bulunamadı');
  }
});

server.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde dinleniyor...`);
});