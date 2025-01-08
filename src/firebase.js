// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZNedi_e-6cpVTHgx0cD06E82x2laKMvY",
  authDomain: "blog-website-ff6f3.firebaseapp.com",
  projectId: "blog-website-ff6f3",
  storageBucket: "blog-website-ff6f3.firebasestorage.app",
  messagingSenderId: "452453704755",
  appId: "1:452453704755:web:397515d2231e129e52ef46",
  measurementId: "G-18QNJ1SJN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
