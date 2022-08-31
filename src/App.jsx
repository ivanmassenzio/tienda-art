import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

const App = () => {
  
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">          
            <ItemListContainer />
        </div>
      </div>
    </>
  );
}

export default App;
