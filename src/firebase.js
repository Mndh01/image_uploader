// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMVpxBmf0sJgJfCMJ90s1bI_bWs73u6DM",
  authDomain: "imageuploader-be96a.firebaseapp.com",
  projectId: "imageuploader-be96a",
  storageBucket: "imageuploader-be96a.appspot.com",
  messagingSenderId: "299168764476",
  appId: "1:299168764476:web:801d7620120ecedc7d6939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);