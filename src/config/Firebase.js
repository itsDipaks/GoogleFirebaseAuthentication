// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlFb5zWsLObisG7YBoQVfuV7JFchGI5_w",
  authDomain: "blogin-signupauth.firebaseapp.com",
  projectId: "blogin-signupauth",
  storageBucket: "blogin-signupauth.appspot.com",
  messagingSenderId: "1088620423199",
  appId: "1:1088620423199:web:48ee8aa06b291843b58d2a",
  measurementId: "G-Y9DX10KTDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)
export const provider =new GoogleAuthProvider()
export const provider1 = new GithubAuthProvider();