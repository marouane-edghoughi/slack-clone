import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3OKj96nI27t-MYjLPesRWFYJkNPNFm5g",
  authDomain: "slack-clone-2022.firebaseapp.com",
  projectId: "slack-clone-2022",
  storageBucket: "slack-clone-2022.appspot.com",
  messagingSenderId: "504684258266",
  appId: "1:504684258266:web:5c22a5a4fffb537e91d6e3"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider, db };