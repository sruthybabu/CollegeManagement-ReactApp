import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
      <Link to="/" className="navbar-brand">COLLEGE</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/" className="nav-link active">Add Student</Link>
        </li>
        <li className="nav-item">
         <Link to="/add" className="nav-link" >Add Faculty</Link>
        </li>
        <li className="nav-item">
            <Link to="/search" className="nav-link">Search Student</Link>
        </li>
        <li className="nav-item">
            <Link to="/faculty" className="nav-link">Search Faculty</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header