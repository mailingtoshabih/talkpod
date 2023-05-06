import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'







const firebaseConfig = {
  apiKey: "AIzaSyBh-4ytq2qAh_OcR1i9KQQ0U13A8L_Rj3c",
  authDomain: "talkpod.firebaseapp.com",
  projectId: "talkpod",
  storageBucket: "talkpod.appspot.com",
  messagingSenderId: "952854847465",
  appId: "1:952854847465:web:d19d3f1065648d7434b578"
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);