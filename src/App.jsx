import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';





const App = () => {
  
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col d-flex justify-content-center">
          <ItemListContainer />
        </div>
      </div>
      </>
  );
}

export default App;
