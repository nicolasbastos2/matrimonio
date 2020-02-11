const cacheName = 'cache-v1';
const resourcesToPrecache =[
    '/' ,
    'index.html' ,

];
self.addEventListener('install', event =>{
    console.log ('install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            return Cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener('activate', event =>{
    console.log('activate event!');
});

self.addEventListener('fetch', event =>{
    event.respondWith(caches.match(event.request)
    .then(cachedResponse=> {
        return cachedResponse || fetch(event.request);
    })
    );
});
