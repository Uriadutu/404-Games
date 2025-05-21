import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Firebase config (gantilah dengan konfigurasi proyek Firebase Anda)
const firebaseConfig = {
  apiKey: "AIzaSyBw2jTNvK2E5PdpQN6ycq0mxSfSuqqwc14",
  authDomain: "tania-firebase-b8bfc.firebaseapp.com",
  projectId: "tania-firebase-b8bfc",
  storageBucket: "tania-firebase-b8bfc.firebasestorage.app",
  messagingSenderId: "283252605556",
  appId: "1:283252605556:web:4e6bc7a7daa8e371ca8721",
  measurementId: "G-DVFCPQ0345",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

export { auth, storage };
