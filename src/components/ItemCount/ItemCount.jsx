import { useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    function add(){
        if(count < stock){
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
            <div className="counter-box">
                <h1>Contador</h1>
                <p>Sotck: {stock}</p>
                <p>Cantidad: {count}</p>

                <div>
                    <button className="btn btn-primary m-1" onClick={add}> + </button>            
                    <button className="btn btn-secondary m-1"onClick={reset}> Reset </button>
                    <button className="btn btn-primary m-1" onClick={substract}> - </button>
                </div>
            <div>
                <button className="btn btn-info mt-5" onClick={() => onAdd(count)}>Confirmar</button>
            </div>
            </div>
        </>
    )
}

export default ItemCount