import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({list}) => {  
  return (
    <>
            {list.map( (productos, indice) => (  
              <div className="col-md-4" key={productos.id}>
                <Item productos={productos} key={productos.url} />
              </div>              
            ))}
    </>
  )
}
