import React, {useEffect, useState} from 'react';
import { products } from '../../data/itemdata'
import { useParams} from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Orbit } from '@uiball/loaders'


export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState()

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.find(product => product.id === Number(id))), 2000)
    })

    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
    }, [])

    return (
        <>
          {
            item ? <ItemDetail item={item}/> : <Orbit size={35} color="#231F20" />
          }
        </>
    );
}