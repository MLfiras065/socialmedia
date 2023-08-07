
import { initializeApp } from "firebase/app";
import {getStorage,ref} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBpI5zDsJ7pCpUSrXRp8Z16ZaUmJh-EaNw",
  authDomain: "socialmedia-de6d7.firebaseapp.com",
  projectId: "socialmedia-de6d7",
  storageBucket: "socialmedia-de6d7.appspot.com",
  messagingSenderId: "806535357206",
  appId: "1:806535357206:web:6d39aa1765dd8c2a86a637"
};


const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)