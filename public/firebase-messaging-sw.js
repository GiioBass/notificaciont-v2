importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAHaow3DJQwqjLOY5eQwwKUnBoEyWr4vQI",
  authDomain: "notifications-b0e3c.firebaseapp.com",
  projectId: "notifications-b0e3c",
  storageBucket: "notifications-b0e3c.appspot.com",
  messagingSenderId: "1018502966661",
  appId: "1:1018502966661:web:080f22e7125657419528ec"
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });