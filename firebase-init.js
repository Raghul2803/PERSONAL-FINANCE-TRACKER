// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvi1Jd3NoNc0WO-nUpJNoxsLrcPa8Cu3o",
  authDomain: "finance-tracker-90042.firebaseapp.com",
  projectId: "finance-tracker-90042",
  storageBucket: "finance-tracker-90042.appspot.com",
  messagingSenderId: "808176245337",
  appId: "1:808176245337:web:48de4e4e4956b26ea06f48"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// OPTIONAL: You can export auth if you need to use it in other modules
export { auth };
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };  