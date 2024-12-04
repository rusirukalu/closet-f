import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBPkmAymqEHUwJlCNHYTRA4lkxEFkPyUoY",
  authDomain: "closetiq-c0b88.firebaseapp.com",
  projectId: "closetiq-c0b88",
  storageBucket: "closetiq-c0b88.firebasestorage.app",
  messagingSenderId: "310564243134",
  appId: "1:310564243134:web:3d4b57bdfa13e750fec0ef",
  measurementId: "G-T6PX0YKWGC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
