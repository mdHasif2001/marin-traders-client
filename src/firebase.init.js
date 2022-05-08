// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeLpKEv7F6BDkfxNfYJ8hFtHCKpOUwDEU",
  authDomain: "th-assignment-a1095.firebaseapp.com",
  projectId: "th-assignment-a1095",
  storageBucket: "th-assignment-a1095.appspot.com",
  messagingSenderId: "710109858378",
  appId: "1:710109858378:web:536e62299247024fc834b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;