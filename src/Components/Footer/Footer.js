import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <header className ='container-fluid'>    
      <div className="row contenedor-menu">
        <div className="col-2">
          <img src="https://images2.imgbox.com/ca/8f/jSxvOTKE_o.jpg" alt="Logo"/>
        </div>
        <nav className="col-10 d-inline-flex menu">
          <ul>
            <li><strong>Ocasiones</strong></li>
            <li>Trabajando desde casa</li>
            <li>Hora del snack</li>
            <li>Desayuno</li>
            <li>Vida vegana</li>
            <li>Horneado</li>
          </ul>
          <ul>
            <li><strong>Todas las categorías</strong></li>
            <li>Salsas</li>
            <li>Horneado</li>
            <li>Desayuno</li>
            <li>Condimentos</li>
            <li>Bebidas</li>
            <li>Saludables</li>
            <li>Para golosos</li>                  
          </ul>
          <ul>
            <li><strong>Regalos</strong></li>
            <li>Caja de horneados</li>
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
