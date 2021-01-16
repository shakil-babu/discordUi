import React from 'react' ;
import Logo from '../../images/logo.png'
import './Navbar.css';
import {BrowserRouter as Router , NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        
<nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logo} alt={Logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 m-auto text-light">
       <Router>
       <li className="nav-item">
          <NavLink  className="nav-link" aria-current="page" to='/dowenload'>Dowenload</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/why-discord-is-different'>Why Discord?</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/nitro'>Nitro</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/safety">Safety</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/support">Support</NavLink>
        </li>
       </Router>
      </ul>
        <div className="navbar-nav">
            <a className='login-btn' href="">Login</a>
        </div>
    </div>
  </div>
</nav>
        
    )
}

export default Navbar
