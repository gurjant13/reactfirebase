import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVx0IkoO4QJ5qqCuqXj6sO_YjdiOfycmc",
  authDomain: "epikreactt.firebaseapp.com",
  databaseURL: "https://epikreactt-default-rtdb.firebaseio.com",
  projectId: "epikreactt",
  storageBucket: "epikreactt.appspot.com",
  messagingSenderId: "859998398552",
  appId: "1:859998398552:web:8a2f4813fec261085b022d"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);