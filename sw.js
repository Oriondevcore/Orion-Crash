const CACHE_NAME = 'orion-crash-v1';
const ASSETS = ['./index.html', './manifest.json', './icon192.png', './icon512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

