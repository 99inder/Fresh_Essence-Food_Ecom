import { doc, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

//Submitting New Item
export const submitItem = async (data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true }
    );
};