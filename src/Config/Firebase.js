import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuV15qmi7nsd-2neOaEUtXHdxcMndEW9Y",
  authDomain: "expense-tracker-2bcb5.firebaseapp.com",
  projectId: "expense-tracker-2bcb5",
  storageBucket: "expense-tracker-2bcb5.appspot.com",
  messagingSenderId: "667743337138",
  appId: "1:667743337138:web:45050bff661d2c353727ab"
};


const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const Storage = getStorage(app);
export const Google = new GoogleAuthProvider();
export const database = new getFirestore(app);