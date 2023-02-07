import React from 'react'
import {NavLink} from 'react-router-dom'
import Keep from '../images/Keep.png';
function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar-img" src={Keep} alt="keep" />
      
        <NavLink className='navlinks' to='/'>KEEP-NOTES</NavLink>
    </nav>
  )
}

export default Navbar