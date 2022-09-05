import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
          <Route path='/detalles/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
