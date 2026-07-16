const CACHE = 'kombat-war-v1';

const ASSETS = [
    './index.html',
    './game.js',
    './styles.css',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './assets/drone.png',
    './assets/tank.png',
    './assets/sam.png',
    './assets/fighter.png',
    './assets/navy.png',
    './assets/missile.png',
    './assets/Orlan-10.jpg',
    './assets/Supercam_S350.jpg',
    './assets/BTR-82A.jpg',
    './assets/MT-LB.jpg',
    './assets/Lancet-3.jpg',
    './assets/Geran-2.jpg',
    './assets/BMP-3.jpg',
    './assets/BMP-2M_Berezhok.jpg',
    './assets/T-80BVM.jpg',
    './assets/Ka-52_Alligator.jpg',
    './assets/Mi-28N_Night_Hunter.jpg',
    './assets/T-90M_Proryv.jpg',
    './assets/TOS-1A_Solntsepek.jpg',
    './assets/S-350_Vityaz.jpg',
    './assets/Pantsir-S1.jpg',
    './assets/Yas-M_(Kazan).jpg',
    './assets/Iskander-M.jpg',
    './assets/Su-34_Fullback.jpg',
    './assets/S-400_Triumf.JPG',
    './assets/Tornado-S.jpg',
    './assets/Zircon_(Tsirkon).jpg',
    './assets/Kinzhal_(Kh-47M2).jpg',
    './assets/FPV_Fiber-Optic_Drone.webp',
    './assets/FPV_Ghoul_(Upyr).jpg',
    './assets/T-72B3M.jpg'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});
