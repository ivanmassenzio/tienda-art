import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'



function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">
      <p>Home</p>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <Link to='/' className='nav-link active'>
          <li className="nav-item">
            
              <span className="visually-hidden">(current)</span>
          </li>
        </Link>
        <Link to='/' className="nav-link">
          <li className="nav-item">
            <p>Productos</p>
          </li>
        </Link>
        <Link to='/productos/lapices' className="nav-link">
        <li className="nav-item">
          <p>Lapices</p>
        </li>
        </Link>
        <Link to='/productos/hojas' className="nav-link">
        <li className="nav-item">
          <p>Hojas</p>
        </li>
        </Link>
      </ul>      
    </div>
    </div>    
    <CartWidget title="Reposera" subtitle="Para reposar"/>
</nav>



    </>
    
  )
}

export default NavBar