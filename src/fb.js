// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9MfckBzccrWpHBE9VEn4g9bzVlQHyMSY",
  authDomain: "vuetify-bf26a.firebaseapp.com",
  databaseURL: "https://vuetify-bf26a-default-rtdb.firebaseio.com",
  projectId: "vuetify-bf26a",
  storageBucket: "vuetify-bf26a.appspot.com",
  messagingSenderId: "230104975024",
  appId: "1:230104975024:web:2d472c8c83ef9a81c89d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
