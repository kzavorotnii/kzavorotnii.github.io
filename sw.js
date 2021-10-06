// 'use strict';

// importScripts('sw-toolbox.js');

// toolbox.precache(["index.html","style/style.css"]);

// toolbox.router.get('/images/*', toolbox.cacheFirst);

// toolbox.router.get('/*', toolbox.networkFirst, {
//   networkTimeoutSeconds: 5
// });


// WORKING 
'use strict';

function hndlEventFetch(e) { }

self.addEventListener('fetch', hndlEventFetch);

//END

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

const cacheName = 'PiskarevskyPWA'
const appShellFiles = [
  '/',
  '/index.html',
  '/app.js',
  '/style/style.css',
  '/icons/favicon.ico',
  '/icons/wcls-logo-512.png',
  '/icons/android-icon-36x36.png',
  '/icons/android-icon-48x48.png',
  '/icons/android-icon-72x72.png',
  '/icons/android-icon-96x96.png',
  '/icons/android-icon-144x144.png',
  '/icons/android-icon-192x192.png'
]


// const gamesImages = [];
// for (let i = 0; i < games.length; i++) {
//   gamesImages.push(`data/img/${games[i].slug}.jpg`);
// }
// const contentToCache = appShellFiles.concat(gamesImages);

const contentToCache = appShellFiles

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});

