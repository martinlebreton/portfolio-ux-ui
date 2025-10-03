import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Ma configuration Firebase donnée par Firebase lors de la création du projet
const firebaseConfig = {
  apiKey: "AIzaSyBCeYlt6tZI2b9tvIA0VpLxBQM8WyaTGLU",
  authDomain: "portfolio-ux-ui.firebaseapp.com",
  projectId: "portfolio-ux-ui",
  storageBucket: "portfolio-ux-ui.firebasestorage.app",
  messagingSenderId: "1075100998721",
  appId: "1:1075100998721:web:ce236426f1469452887ac0",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore (base de données)
export const db = getFirestore(app);

// Initialiser Auth (authentification) - optionnel pour l'instant
export const auth = getAuth(app);

export default app;
