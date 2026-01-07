import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTByaRRCqU1Mk0wsHwFZ1lA1GNjhj2dq4",
  authDomain: "countdown-multiplayer.firebaseapp.com",
  databaseURL: "https://countdown-multiplayer-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "countdown-multiplayer",
  storageBucket: "countdown-multiplayer.firebasestorage.app",
  messagingSenderId: "476125260398",
  appId: "1:476125260398:web:a5347337281ea95e93d47f",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);
