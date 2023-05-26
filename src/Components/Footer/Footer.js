 import React from 'react'

const Footer = () => {
  return (
      <div>
        <a href='https://lordicon.com/'>Icons by Lordicon.com</a>
      </div>   
     var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="footer.css" />
        <footer>
          <div className="container">
            <div className="content">
              <h2>Cuentale a un amigo</h2>
              <div className="social-icons">
                <a href="#"><img src="https://images2.imgbox.com/56/1e/4OLTv6zu_o.png" alt="Facebook" /></a>
                <a href="#"><img src="ihttps://images2.imgbox.com/62/88/GcDqQAkT_o.png" alt="Instagram" /></a>
                <a href="#"><img src="https://images2.imgbox.com/0d/48/2dLdlKVG_o.png" alt="Twitter" /></a>
                <a href="#"><img src="https://images2.imgbox.com/a9/61/oJjbp6i5_o.png" alt="Whats App" /></a>
                <a href="#"><img src="https://images2.imgbox.com/aa/1c/jpJR5jKn_o.png" alt="Messenger" /></a>
                <a href="#"><img src="https://images2.imgbox.com/87/f2/aY116FZt_o.png" alt="Tik-Tok" /></a>
              </div>
            </div>
          </div>
          <div className="container-menu">
            <div className="logo">
              <img src="https://images2.imgbox.com/ca/8f/jSxvOTKE_o.jpg" alt="Logo" />
            </div>
            <nav className="menu">
              <ul>
                <li><a href="#">Ocasiones</a>
                  <ul>
                    <li><a href="#">Trabajando desde casa</a></li>
                    <li><a href="#">Hora del snack</a></li>
                    <li><a href="#">Desayuno</a></li>
                    <li><a href="#">Vida vegana</a></li>
                    <li><a href="#">Horneado</a></li>
                  </ul>
                </li>
                <li><a href="#">Todas las categorías</a>
                  <ul>
                    <li><a href="#">Horneado</a></li>
                    <li><a href="#">Desayuno</a></li>
                    <li><a href="#">Condimentos</a></li>
                    <li><a href="#">Bebidas</a></li>
                    <li><a href="#">Saludables</a></li>
                    <li><a href="#">Para golosos</a></li>
                    <li><a href="#">Salsas</a></li>
                  </ul>
                </li>
                <li><a href="#">Regalos</a>
                  <ul>
                    <li><a href="#">Caja de horneados</a></li>
                    <li><a href="#">Sensaciones dulces</a></li>
                    <li><a href="#">Sabores Locales</a></li>
                  </ul>
                </li>
                <li><a href="#">Nuestras marcas</a></li>
                <li><a href="#">Sobre nosotros</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
});
  )
}

export default Footer
