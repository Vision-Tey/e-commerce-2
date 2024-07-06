// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAUEeHbJa2ifz-L63PVCrTgziuh8_FDc1I",
  authDomain: "cars-site-e48fe.firebaseapp.com",
  projectId: "cars-site-e48fe",
  storageBucket: "cars-site-e48fe.appspot.com",
  messagingSenderId: "1077027437827",
  appId: "1:1077027437827:web:67af717c90735f2b637d36"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };