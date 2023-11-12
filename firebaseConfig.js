// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, inMemoryPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2ERyEzbxqAKdX4qG_Ze3AW9VvDswNfLM",
    authDomain: "react-aa6af.firebaseapp.com",
    projectId: "react-aa6af",
    storageBucket: "react-aa6af.appspot.com",
    messagingSenderId: "460163677892",
    appId: "1:460163677892:web:473267846a533ca45e9391",
    measurementId: "G-RNMTVW2P19"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: inMemoryPersistence,
});

export { auth };