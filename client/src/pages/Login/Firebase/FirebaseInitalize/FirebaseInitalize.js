import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

const firebaseInitalize = () => {
    initializeApp(firebaseConfig);
};

export default firebaseInitalize;