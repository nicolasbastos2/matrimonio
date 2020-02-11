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


		let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) =>{
  e.preventDefault();
  deferredPrompt = e;
});
btnAdd.addEventListener('click', (e) =>{
	deferredPrompt.prompt();
	deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted'){
			console.log('user accepted');
		}
		deferredPrompt = null;
	});
});

