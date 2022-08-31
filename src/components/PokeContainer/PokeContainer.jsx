import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'
import itemdata from '../../data/itemdata'
    

export const PokeContainer = () => {
  const [pokemones, setPokemones] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    // .then((res) => res.json())
    // .then((respone) => console.log(respone.results))

//     const getPokes = async () =>{
//         const misDatos = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
//         const response = await misDatos.json()
//         setPokemones(response.results)
//     }    
//     getPokes()

    const getPokeData = new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(itemdata)
        }, 2000)
    })
        getPokeData
        .then((response) => {setPokemones(response)})
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
  }, [])
  return (
    isLoading ? <h2>Cargando. . .</h2> :
     <>
     <ItemList list={pokemones}/>
     </>
  )
}
