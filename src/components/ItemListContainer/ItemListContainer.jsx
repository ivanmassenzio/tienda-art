import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'
import itemdata from '../../data/itemdata'
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [isLoading,setIsLoading] = useState(true)
  
    useEffect(() => {   
      const getProductData = new Promise((resolve, reject) => {
          setTimeout (() => {
              resolve(itemdata)              
          }, 2000)
      })
          getProductData
          .then((response) => {setProductos(response)})
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false))
    }, [])    
    return (isLoading ?
         <h2>Cargando. . .</h2> :            
                <ItemList list={productos}/>            
    )

}
