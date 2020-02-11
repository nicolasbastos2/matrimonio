if (!('serviceWorker' in navigator)) {
    console.log('servoce worker not supported');
    return;
    }
    navigator.serviceWorker. register('sw.js')
    .then (function(registration){
      console.log('sw registered! Scope is:' , registration.scope);
      });
