// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getDatabase, ref } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMVpxBmf0sJgJfCMJ90s1bI_bWs73u6DM",
  authDomain: "imageuploader-be96a.firebaseapp.com",
  databaseURL: "https://imageuploader-be96a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "imageuploader-be96a",
  storageBucket: "imageuploader-be96a.appspot.com",
  messagingSenderId: "299168764476",
  appId: "1:299168764476:web:801d7620120ecedc7d6939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbref = ref;
export const storage = getStorage(app);
export const database = getDatabase(app);