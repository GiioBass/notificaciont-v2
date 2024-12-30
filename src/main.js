import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(router).mount('#app')

if ('serviceWorker' in navigator) {
  console.log(navigator.serviceWorker);
  
  // navigator.serviceWorker.getRegistrations().then((registrations) => {
  //   registrations.forEach((registration) => registration.unregister());
  // });

  navigator.serviceWorker.register('firebase-messaging-sw.js', { scope: '/' })
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((err) => {
      console.log('Service Worker registration failed:', err);
    });
}