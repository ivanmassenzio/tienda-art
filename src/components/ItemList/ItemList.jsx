import React from 'react'
import { Card } from '../Card/Card'

export const ItemList = ({productList}) => {
  return (
    <div className='d-flex'>
      {
        productList.map(item => <Card key={item.id} item={item} />)
      }
    </div>

  )
}