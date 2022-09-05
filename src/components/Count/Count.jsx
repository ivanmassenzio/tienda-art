import React, { useState } from 'react'

export const Count = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const addCounter = () => {
        count < stock && setCount( count + 1 )
        console.log(count)
    }

    const subtractCounter = () => {
        count > initial && setCount( count - 1 )
        console.log(count)
    }


  return (
    <div className='container'>
        <p className='counter'>{count}</p>
        <div className='container d-flex justify-content-center'>
            <button className='btn btn-secondary m-1' onClick={subtractCounter}>-</button>
            <button className='btn btn-secondary m-1' onClick={addCounter}>+</button>
        </div>
        <button className='btn btn-primary mt-2' onClick={() => onAdd(count)}>Añadir al carrito</button>
    </div>
  )
}
