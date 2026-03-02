// This caches the files so the app loads quickly
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('eric-abi-app').then((cache) => cache.addAll([
      './index.html',
      './palagi.mp3',
      './icon.png',
      './pic1.jpg', './pic2.jpg', './pic3.jpg', './pic4.jpg', './pic5.jpg', './pic6.jpg',
      './pic7.jpg', './pic8.jpg', './pic9.jpg', './pic10.jpg', './pic11.jpg', './pic12.jpg',
      './vid2.mp4', './vid3.mp4', './vid4.mp4'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});