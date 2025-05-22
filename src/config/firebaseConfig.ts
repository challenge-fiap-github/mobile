// src/config/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEjpj1sENCvQFWGiLuRLT-vc0GNEbJZgc",
  authDomain: "odontovision-21756.firebaseapp.com",
  projectId: "odontovision-21756",
  storageBucket: "odontovision-21756.appspot.com",
  messagingSenderId: "51432701827",
  appId: "1:51432701827:web:b89d5abbc9ba773e1a00b6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
