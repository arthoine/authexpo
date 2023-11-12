// authFunctions.js
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Connecté avec succès!');
    } catch (error) {
        console.error('Erreur de connexion :', error.message);
    }
};

export const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log('Déconnecté avec succès!');
    } catch (error) {
        console.error('Erreur de déconnexion :', error.message);
    }
};

export const onAuthStateChange = (setEmailCallback) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setEmailCallback(user.email);
        } else {
            setEmailCallback('');
        }
    });
};
