import './.env'
import { initializeApp } from "firebase/app";
import { doc, collection, addDoc, getDoc, getDocs, query, where, deleteDoc, updateDoc, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-34715-78f59.firebaseapp.com",
  projectId: "react-34715-78f59",
  storageBucket: "react-34715-78f59.appspot.com",
  messagingSenderId: "929340883784",
  appId: "1:929340883784:web:84754661ee01d5440d297d",
  measurementId: "G-NRHYW8EJ9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

async function cargarBaseDeDatos  () {
    const promise = await fetch('../data/product.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            title: producto.title,
            description: producto.description,
            precio: producto.precio,
            stock: producto.stock,
            img: "",
            categoria: producto.categoria
          });
    })
    
}

const getProducto = async (id) => {
  getDoc(doc(db,"products",id))
}

const getProductos = async () => {
  const productos = await getDocs(collection(db,"products"))
  return productos
}

const getProductosPorCategoria = async (categoria) => {
  const productos = await query(collection(db,"products"), where("categoria","==",categoria))
  const col = await getDocs(productos)
  return col
  
}

export {db,app, cargarBaseDeDatos, getProducto, getProductos, getProductosPorCategoria}