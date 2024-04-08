import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB237fqyxGKelwClzw95KvcrkJbl0T-GE8",
  authDomain: "notes-app-917d8.firebaseapp.com",
  projectId: "notes-app-917d8",
  storageBucket: "notes-app-917d8.appspot.com",
  messagingSenderId: "793121769075",
  appId: "1:793121769075:web:eef34d086020371cf04c06",
  measurementId: "G-C0CW2H97TE"
};
const app = initializeApp(firebaseConfig);
export default app ; 