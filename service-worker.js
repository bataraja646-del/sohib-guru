const CACHE_NAME = "sohibguru-v3";

const urlsToCache = [
  "/sohib-guru/",
  "/sohib-guru/index.html",
  "/sohib-guru/manifest.json",
  "/sohib-guru/icon.png",

  "/sohib-guru/materi-sudut.html",
  "/sohib-guru/jenis-sudut.html",
  "/sohib-guru/pengukuran.html",
  "/sohib-guru/modul.html",
  "/sohib-guru/lihat-modul.html",
  "/sohib-guru/buat-modul.html"
];

// install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request)
          .catch(() => caches.match("/sohib-guru/index.html"));
      })
  );
});
