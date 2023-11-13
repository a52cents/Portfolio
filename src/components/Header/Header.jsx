import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
const Header = () => {

  return (
    <header>
      <div className="wrapper">
        <Navbar/>
        <div className="cta">
          <p className='hello-text'>Bienvenue sur mon portfolio !</p>
          <h1 className='title'>Développeur full-stack </h1>
          <h2 className='subtitle'>(front-end et back-end)en herbe</h2>
          <a href='#topics' className='about-btn'>A propos </a>
        </div>
      </div>
    </header>
  )
}

export default Header
