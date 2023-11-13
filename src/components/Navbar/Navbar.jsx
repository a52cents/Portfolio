import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <a href='#' className='logo'>Portfolio</a>
      <ul>
        <li><a href='#topics'>A propos</a></li>
        <li><a href='#skills'>Skills/Outils</a></li>
        <li><a href='#'>Projets</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar