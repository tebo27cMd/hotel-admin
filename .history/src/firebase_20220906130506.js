import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyD6gGiNC7Wpn4zrKdYxluA2NzICH8NgRGQ",
  authDomain: "hotel-app-8880c.firebaseapp.com",
  projectId: "hotel-app-8880c",
  storageBucket: "hotel-app-8880c.appspot.com",
  messagingSenderId: "667326046708",
  appId: "1:667326046708:web:17606195cc145d307cd9a1",
  measurementId: "G-F3XW3H8YYX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
