// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// 追記
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4nf91ubwHt7VMsjsZV6cu665AE_dhu3U",
  authDomain: "blog-with-react-firebase-78fe0.firebaseapp.com",
  projectId: "blog-with-react-firebase-78fe0",
  storageBucket: "blog-with-react-firebase-78fe0.appspot.com",
  messagingSenderId: "242235661976",
  appId: "1:242235661976:web:d0279f1b615377d479faed",
  measurementId: "G-ET5SHMJ7PD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 追記
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
