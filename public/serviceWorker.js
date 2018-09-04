// SERVICE WORKER

const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';
const PRECACHE_URLS = [
  'index.html',
  './', // Alias for index.html
  'favicon.ico'
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});




// NOTIFICATION EVENTS

self.addEventListener('push', (e)=>{
    console.log('pushNotification');
    console.log(e);
}),


self.addEventListener('notificationclick', function(e) {
  console.log('notificationClicked');
  console.log(e);
});

self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var data = notification.data;
  console.log('Closed notification');
  console.log(data);
});
