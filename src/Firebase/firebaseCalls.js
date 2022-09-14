import './firebaseconfig'
import { db } from "./firebaseconfig";
import {  collection,  query,  where,  getDocs,  doc,  getDoc,  addDoc, updateDoc,  } from "firebase/firestore";
import { async } from "@firebase/util";

export const getAllProducts = async (tipo = undefined) => {
    let q = null;

    if(tipo == undefined){
        q = query(collection(db, 'products'));
    } else {
        q = query(collection(db, 'products'), where('category', '==', tipo))
    }
    const querySnapshot = await getDocs(q)

    let productos = [];

    querySnapshot.forEach((doc) => {
        productos.push({...doc.data(), id: doc.id})
    })

    return productos
}

export const productosById = async (id) => {
    const docRef = doc(db,'products', id);
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
        return {...docSnap.data(), id: id}
    }

    return {};
}

export const updateStock = async (id, stock) => {
    const producto = doc(db, 'products', id);

    await updateDoc(producto, {
        stock: stock
    })
}

export const agregarCompra = async (buyer, items, total) => {
    let date = new Date();

    const docRef = await addDoc(collection(db, 'compras'), {buyer,items,date,total} );
    return docRef.id
}