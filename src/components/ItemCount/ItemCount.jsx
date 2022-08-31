import { useState } from "react";

export const ItemCount = ({productos, onAdd}) => {
    const [count, setCount] = useState(1);
    console.log(productos)
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
}

export default ItemCount