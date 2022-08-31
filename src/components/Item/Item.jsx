import React, {useState} from 'react'

export const Item = ({productos}) => {
  function onAdd(count){        
    console.log(`Se han seleccionado ${count} productos`)
}

const [count, setCount] = useState(1);
    function add(){
        if(count < productos.stock){
            setCount(count + 1)
        }        
    }

    function substract(){
        if(count > 0){
            setCount(count - 1)
        }        
    }

    function reset(){
        setCount(0)
    }

  return (
    <>      
      <div className="card mt-3">
          <img src={productos.image} alt={productos.name}/>
          <div className="card-body">
            <h4>{productos.name}</h4>
            <p>Sotck: {productos.stock}</p>
            <p>Cantidad: {count}</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary m-1" onClick={add}> + </button>            
              <button className="btn btn-secondary m-1"onClick={reset}> Reset </button>
              <button className="btn btn-primary m-1" onClick={substract}> - </button>
            </div>
          </div>
          <button className="btn btn-info m-3" onClick={() => onAdd(count)}>Confirmar</button>
      </div>
    </>
  )
}
