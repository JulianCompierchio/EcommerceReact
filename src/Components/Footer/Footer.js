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
            <li>Trabajando desde casa</li>
            <li>Desayuno</li>
            <li>Vida vegana</li>
          </ul>
          <ul>
            <li><strong>Todas las categorías</strong></li>
            <li>Desayuno</li>
            <li>Saludables</li>
            <li>Para golosos</li>                  
          </ul>
          <ul>
            <li><strong>Regalos</strong></li>
            <li>Cafeteras sensacionales</li>
            <li>Sensaciones dulces</li>
            <li>Sabores Locales</li>
          </ul>
              <li><strong>Nuestras marcas</strong></li>
          <ul>
              <li><strong>Sobre nosotros</strong></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Footer
