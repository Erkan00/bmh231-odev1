# BMH231 Web Programlama - Ödev 1: Web Sunucusu

Bu proje, Yozgat Bozok Üniversitesi Bilgisayar Mühendisliği Bölümü BMH231 Web Programlama dersi 1. ödevi kapsamında geliştirilmiş temel bir Node.js HTTP sunucusudur. Projede harici bir web çatısı (Express vb.) kullanılmamış; Node.js yerleşik http modülü ve tarih işlemleri için dayjs paketi kullanılmıştır.

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın:
   git clone https://github.com/Erkan00/bmh231-odev1.git
   cd bmh231-odev1

2. Bağımlılıkları yükleyin:
   npm install

3. Sunucuyu başlatın:
   npm start

Sunucu varsayılan olarak http://localhost:3000 portunda çalışacaktır.

## Desteklenen Yollar (Routes)

Sunucu yalnızca GET isteklerini kabul eder (diğer yöntemlere 405 Method Not Allowed döner):

- GET /: Ana sayfa (HTML formatında karşılama mesajı ve bağlantı).
- GET /hakkimda: Geliştirici tanıtım sayfası (HTML).
- GET /api/ders: Ders bilgilerini dönen API rotası (JSON).
- GET /api/agep: AGEP son teslim tarihini ve kalan gün sayısını dönen API rotası (JSON).
- Tanımsız diğer yollar: 404 Not Found (Düz metin: Sayfa bulunamadı).
