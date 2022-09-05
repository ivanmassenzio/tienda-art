import { Count } from '../Count/Count'
import './ItemDetail.css';
export const ItemDetail = ({item}) => {
  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <>      
      <div className="card-detail">
        <div className="card-detail-left">
          <img className='img' src={item.img} alt={item.title}/>
        </div>        
          <div className="card-detail-right text-center">
            <h4>{item.title}</h4>
            <p>Precio: ${item.precio}</p>
            <p>Sotck: {item.stock}</p>
            <Count stock={item.stock} initial={1} onAdd={onAdd}/>
          </div>          
      </div>
    </>
  )
}
