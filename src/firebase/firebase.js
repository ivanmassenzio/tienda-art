import '../.env'
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

const getProducto = async (id) => {
  const item = await getDoc(doc(db,"products",id))
  return item
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

const genOrder = async (data) => {
  const col = collection(db,"orders")
  const order = await addDoc(col, data)
  return order
}

export {db,app, getProducto, getProductos, getProductosPorCategoria, genOrder}