const CACHE_NAME = 'al-muttaqin-kids-v2.5-cache';
const CORE_ASSETS = [
  "./",
  "./assets/MAM_CHR_ABI_3QFRONT_V1.2.jpg",
  "./assets/MAM_CHR_ALQOSAM_3QFRONT_V1.2.jpg",
  "./assets/MAM_CHR_UMI_3QFRONT_V1.2.jpg",
  "./assets/MAM_CHR_ZAHRA_3QFRONT_V1.2.jpg",
  "./assets/MAM_HERO_BANNER_KAMPUNG_V1.2.jpg",
  "./assets/MAM_LOC01_MUSHOLLA_EXTFRONT_V1.2.jpg",
  "./assets/MAM_LOC02_RUMAH_INTERIOR_V1.2.jpg",
  "./assets/MAM_LOC03_STUDIO_HIJAIYAH_V1.2.jpg",
  "./assets/MAM_LOC04_TAMAN_WUDHU_V1.2.jpg",
  "./assets/MAM_PRP_KENDI_AIR_MUTLAQ_V1.2.jpg",
  "./assets/MAM_PRP_MUSHAF_REHAL_V1.2.jpg",
  "./assets/MAM_PRP_SAJADAH_V1.2.jpg",
  "./assets/MAM_PRP_TAS_BUKU_V1.2.jpg",
  "./assets/MAM_UI_REWARD_MEDAL_SEEDS_V1.2.jpg",
  "./assets/MAM_WORLD_MAP_KAMPUNG_6LOC_V1.2.jpg",
  "./assets/icon-512.png",
  "./assets/logo-reverse.png",
  "./assets/logo.jpg",
  "./assets/logo.png",
  "./assets/prop-alat-sholat.jpg",
  "./assets/prop-bola.jpg",
  "./assets/prop-buku-cerita.jpg",
  "./assets/prop-piring-rapi.jpg",
  "./assets/prop-rak-sandal.jpg",
  "./assets/prop-salam-rumah.jpg",
  "./assets/prop-siram-tanaman.jpg",
  "./assets/prop-tempat-sampah.jpg",
  "./assets/prop-tempat-tidur.jpg",
  "./assets/ui-biji.jpg",
  "./index.html",
  "./manifest.webmanifest"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
      if (resp && resp.status === 200 && resp.type === 'basic') {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
      }
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
