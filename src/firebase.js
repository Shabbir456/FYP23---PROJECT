// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
import database from '@react-native-firebase/database';
import { getStorage, ref } from "firebase/storage";
import { firebase } from '@react-native-firebase/database';


// import firestore from '@react-native-firebase/firestore'
// import { firebase } from "@react-native-firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmh_iF9oNYC18mXaovd8HVBosv2Xu7VyU",
  authDomain: "realtime-3b5d0.firebaseapp.com",
  projectId: "realtime-3b5d0",
  storageBucket: "realtime-3b5d0.appspot.com",
  messagingSenderId: "1074058178738",
  appId: "1:1074058178738:web:eff6286fbb8e2d38fd99ab",
  measurementId: "G-86D31YK6HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.firestore().settings({ experimentalForceLongPolling: true }); 

//Initialize Database
export const db = getDatabase(app);
//initialize Auth
export const auth = getAuth(app);

export const storage = getStorage(app);




