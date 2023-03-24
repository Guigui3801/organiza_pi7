// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKCxcx4bvNHd4V3D5IEVh5NnF5a5YuM28",
  authDomain: "organiza-c7092.firebaseapp.com",
  projectId: "organiza-c7092",
  storageBucket: "organiza-c7092.appspot.com",
  messagingSenderId: "774967398765",
  appId: "1:774967398765:web:e1168bf4147874fb674a64",
  measurementId: "G-QCJ1KGHX0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);