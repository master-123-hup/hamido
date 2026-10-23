const CACHE_NAME = 'hamido-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // الحدث الضروري ليعتبر المتصفح الموقع قابلاً للتثبيت
});