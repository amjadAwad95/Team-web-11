import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase"

export const useFireBase = (collectionName) => {
    const [data, setData] = useState([])
    const getData = async () => {
        await getDocs(collection(db, collectionName)).then((querySnapshot) => {
            const objectData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setData(objectData);
        })
    }
    const deleteData = async (id) => {
        const ref = doc(db, collectionName, id);
        await deleteDoc(ref);
    }
    const updateData = async (id, newObject) => {
        const ref = doc(db, collectionName, id);
        await updateDoc(ref, newObject)
    }
    const addToData = async (e, object) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, collectionName), object);
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        getData();
    }, [data])
    return { data, deleteData, addToData, updateData }
}