const cacheName = 'cache-v1';
const resourcesToPrecache =[
    '/' ,
    'index.html' ,
    '/common-css/styles.css' ,
    '/common-css/bootstrap.css'  ,
    '/common-css/fluidbox.min.css' ,
    '/common-css/layerslider.css' ,
    '/common-css/swiper.css' ,
    '/common-js/bootstrap.js' ,
    '/common-js/jquery.countdown.min.js' ,
    '/common-js/jquery.fluidbox.min.js' ,
    '/common-js/jquery-3.1.1.min.js' ,
    '/common-js/tether.min.js' ,
];
self.addEventListener('install', function (event) {
    console.log ('Service worker install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(function (cache) {
            return cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener('activate', event =>{
    console.log('activate event!');
});

self.addEventListener('fetch', event =>{
    event.respondWith(
        caches.match(event.request) || fetch(event.request)
    );
    });
