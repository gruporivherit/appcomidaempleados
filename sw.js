// Service Worker mínimo para habilitar la instalación PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // No cachea nada, solo deja pasar la información
  event.respondWith(fetch(event.request));
});