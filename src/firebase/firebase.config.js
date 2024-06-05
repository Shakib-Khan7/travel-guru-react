// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS0PU96TsxDt-3nO0uxZdpm4QsRj9YjWw",
  authDomain: "travel-guru-auth-158b8.firebaseapp.com",
  projectId: "travel-guru-auth-158b8",
  storageBucket: "travel-guru-auth-158b8.appspot.com",
  messagingSenderId: "231169208541",
  appId: "1:231169208541:web:213c0040976920bfeaab34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;