import { initializeApp } from 'firebase/app';
import { getAuth, updatePassword, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDocs, getDoc, addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCibqOBQzy6a5517Sc7A8m9W4ugSskAKCo',
    authDomain: 'week4-user.firebaseapp.com',
    projectId: 'week4-user',
    storageBucket: 'week4-user.appspot.com',
    messagingSenderId: '964541057368',
    appId: '1:964541057368:web:8f5f52b83b67bd2a4a3d2d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const db = getFirestore();
export default auth;

export const createAccount = async (email, displayName, password, role) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(collection(db, 'user'), {
            email,
            displayName,
            password,
            role,
        });
    } catch (e) {
        console.log(e);
    }
};
