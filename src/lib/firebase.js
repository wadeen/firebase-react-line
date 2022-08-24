import { initializeApp } from "firebase/app"; // Firesbase init
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Auth

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Firestore
const auth = getAuth(app); // Auth
const provider = new GoogleAuthProvider(); // Auth

export { db, auth, provider };
