<template>
    <div>
        <h1>Notification FCM</h1>
        <button @click="requestPermission" class="btn btn-secondary custom-btn">Enable Notifications</button>
        <button @click="getFCMToken" class="btn btn-secondary custom-btn">Get Token FCM</button>
        <router-link to="/" class="btn btn-primary">Home</router-link>
    </div>
</template>

<script>
import { messaging, getToken} from '@/utils/firebase'
export default {
    name: 'NotificationFCM',
    mounted() {
        console.log('Component has been mounted');
        // console.log(process.env.VUE_APP_FIREBASE_VAPID_KEY);
        
    },
    methods: {
        requestPermission() {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                    this.getFCMToken();
                } else {
                    console.log('Unable to get permission to notify.');
                }
            });
        },
        getFCMToken() {
            getToken(messaging, { vapidKey: process.env.VUE_APP_FIREBASE_VAPID_KEY }).then((currentToken) => {
                if (currentToken) {
                    console.log('FCM Token:', currentToken);
                    // Send the token to your server and update the UI if necessary
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
        }
    }
    
}
</script>

<style scoped>
.custom-btn {
    color: white; 
    text-decoration: none; 
    margin: 10px 10px 10px 0; /* Añade margen a la derecha */
}

.custom-link {
    color: white; 
    text-decoration: none; 
    margin: 10px 0 10px 10px; /* Añade margen a la izquierda */
}

.custom-btn:hover, .custom-link:hover {
    color: white; 
}
</style>