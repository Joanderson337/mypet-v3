import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBlma1C1_Cf27FvRHxN6G2RQsEj36peYkY",
  authDomain: "mypetv3-6473c.firebaseapp.com",
  projectId: "mypetv3-6473c",
  storageBucket: "mypetv3-6473c.appspot.com",
  messagingSenderId: "314249774779",
  appId: "1:314249774779:web:2480a470c1b1d3cbe10b9e"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});
