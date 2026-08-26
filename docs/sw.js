// Einfacher Service Worker für PWA-Kompatibilität
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Verarbeitet Netzwerkanfragen
  event.respondWith(fetch(event.request));
});
