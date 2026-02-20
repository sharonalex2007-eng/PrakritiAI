import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbVVGLYhVjisf755BYqC3GjYAlE6Z6pMg",
  authDomain: "prakritiai-b3b2a.firebaseapp.com",
  projectId: "prakritiai-b3b2a",
  storageBucket: "prakritiai-b3b2a.firebasestorage.app",
  messagingSenderId: "233110658952",
  appId: "1:233110658952:web:8552f6db89c4b933bd243d",
  measurementId: "G-954NNGK1DF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);