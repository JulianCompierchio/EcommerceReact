import React from 'react'
import logo from './Images/CoffeeMachine.svg'
import './Footer.css'

const Footer = () => {
  return (
    <header className ='container-fluid'>    
      <div className="row contenedor-menu">    
        <div className="col-2">
          <img className='logo'src={logo} alt="Logo"/>
        </div>   
        <nav className="col-10 d-inline-flex menu">
          <ul>
            <li><strong>Ocasiones</strong></li>
            <li>Trabajo en casa</li>
            <li>Desayuno</li>
            <li>Vida vegana</li>
          </ul>
          <ul>
            <li><strong>Categorías</strong></li>
            <li>Desayuno</li>
            <li>Saludables</li>
            <li>Para golosos</li>                  
          </ul>
              <li><strong>Marcas</strong></li>
          <ul>
              <li><strong>Sobre nosotros</strong></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Footer
