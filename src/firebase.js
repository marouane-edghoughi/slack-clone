import { firebaseConfig } from './private';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider, db };