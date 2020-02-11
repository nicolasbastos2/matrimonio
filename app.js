let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) =>{
  e.preventDefault();
  deferredPrompt = e;
});