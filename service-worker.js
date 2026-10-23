const CACHE_NAME = 'hamido-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // حدث الفيتش ضروري جداً ليعمل التثبيت
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});