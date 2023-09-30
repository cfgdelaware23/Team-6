import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, where, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "./serviceAccount.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
const db = getFirestore(app);

const testQuery = async () => {
    try {
        const q = collection(db, "events");
        const snapshot = await q.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
    }
    catch (err) {
        if (err instanceof Error) {
            alert("An error occurred while signing in with Google: " + err.message);
        }
    }
};

export { db, testQuery };
