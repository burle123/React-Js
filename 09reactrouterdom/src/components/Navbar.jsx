import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            {/* <li>Home</li>
            <li>About</li>
            <li>Contact</li> */}
            <div>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Product">Product</Link>
            </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar