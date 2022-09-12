import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import  {CartProvider }  from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  
  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/detalles/:id' element={<ItemDetailContainer />}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
