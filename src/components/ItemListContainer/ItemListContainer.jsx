import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = () => {
    function onAdd(count){        
        console.log(`Se han seleccionado ${count} productos`)
    }
    return (
        <>
            <ItemCount stock={5} onAdd={onAdd} initial="1"/>
            
        </>
    );
}
