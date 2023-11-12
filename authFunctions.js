// authFunctions.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';


export const createUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Utilisateur créé avec succès:', user);
        return user;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error.message);
        throw error;
    }
};

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
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            setEmailCallback(user.email);
        } else {
            setEmailCallback('');
        }
    });
};
