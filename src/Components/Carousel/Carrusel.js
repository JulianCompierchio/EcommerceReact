import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Navegación infinita
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 3, // Número de imágenes mostradas a la vez
    slidesToScroll: 1, // Número de imágenes que se desplazan al cambiar
  };

  return (
      <Slider {...settings}>
        <div>
          <img
            className="img"
            src="https://i.pinimg.com/originals/47/3c/09/473c0981c7a802906a0f38e06059ae32.png"
            alt="Imagen 1"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://img.freepik.com/vector-premium/cafetera-italiana_47649-210.jpg"
            alt="Imagen 2"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_639851-MLA31624026779_072019-O.jpg"
            alt="Imagen 3"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrinP_ku740wJ1LhSWZUEARVYMo-_4tkW4g&usqp=CAU"
            alt="Imagen 4"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://d2r9epyceweg5n.cloudfront.net/stores/111/620/products/51-d4cfd034a151b337a216443550810948-640-0.png"
            alt="Imagen 5"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtSBH9EbUljyjAiDHEla3dTlLo_7TALAIeg&usqp=CAU"
            alt="Imagen 6"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://www.starbucksathome.com/ar/sites/default/files/2022-04/AR_ar_SBUX_W3_Banner_RG_220315_V1%20%281%29%20%281%29.jpg"
            alt="Imagen 7"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_706769-MLA54195258289_032023-O.webp"
            alt="Imagen 8"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_909462-MLA46507356673_062021-O.webp"
            alt="Imagen 9"
          />
        </div>
      </Slider>
  );
};

export default Carrusel;