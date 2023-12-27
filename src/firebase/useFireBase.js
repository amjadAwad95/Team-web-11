import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase"

export const useFireBase = (collectionName) => {
    const [data, setData] = useState([])
    const deleteData = async (id) => {
        const ref = doc(db, collectionName, id);
        await deleteDoc(ref);
    }
    const updateData = async (id, newObject) =>
     {
        const ref = doc(db, collectionName, id); 
        await updateDoc(ref, newObject)
    }
    const addToData = async (e, object) =>
     {
        e.preventDefault()
        try {
            await addDoc(collection(db, collectionName), object);
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectionName), (querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => (
                {
                    ...doc.data(), id: doc.id
                }
            ))
            setData(newData);
        })
        return () => unsubscribe()
    }, [collectionName])
    return { data, deleteData, addToData, updateData }
}