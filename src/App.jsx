import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
// import React, { useState } from 'react'; 



// const [cont, setCont] = useState(0);

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer title="Reposera" subtitle="Para reposar"/>

      <p>
        {/* Contador: {cont} */}
      </p>
{/* 
      <button  className="btn btn-secondary" onClick={()=> {}}> 
        +
      </button>
      <button   className="btn btn-secondary"onClick={()=> {}} >        
      -
      </button> */}
      </>
  );
}

export default App;
