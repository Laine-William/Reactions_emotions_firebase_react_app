import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    
    apiKey: "AIzaSyC78NKydyh1G7APF64glI_GaqhfpfcrhtI",
    authDomain: "databasefacedetection.firebaseapp.com",
    projectId: "databasefacedetection",
    storageBucket: "databasefacedetection.appspot.com",
    messagingSenderId: "518518954682",
    appId: "1:518518954682:web:884c885f8fea008a654083"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;