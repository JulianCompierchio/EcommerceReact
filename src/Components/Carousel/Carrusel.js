import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
      <Slider className="slider" {...settings}>
        <div className="img2">
          <img
            className="img"
            src="https://i.pinimg.com/originals/47/3c/09/473c0981c7a802906a0f38e06059ae32.png"
            alt="cafetera francesa con aza "
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://img.freepik.com/vector-premium/cafetera-italiana_47649-210.jpg"
            alt="cafetera italiana"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_639851-MLA31624026779_072019-O.jpg"
            alt="cafetera italiana negra"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrinP_ku740wJ1LhSWZUEARVYMo-_4tkW4g&usqp=CAU"
            alt="cafetera francesa"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://d2r9epyceweg5n.cloudfront.net/stores/111/620/products/51-d4cfd034a151b337a216443550810948-640-0.png"
            alt="cafetera express doble"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtSBH9EbUljyjAiDHEla3dTlLo_7TALAIeg&usqp=CAU"
            alt="taza"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_898476-MLA69638834680_052023-O.webp"
            alt="cafetera filtro"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_706769-MLA54195258289_032023-O.webp"
            alt="molinillo de café"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://www.dekano.pe/wp-content/uploads/2020/09/dekano-8-300x300.jpg"
            alt="cafetera presion"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://carrefourar.vtexassets.com/arquivos/ids/162461-800-auto?v=637467661969600000&width=800&height=auto&aspect=true"
            alt="cafetera de capsula"
          />
        </div>
      </Slider>
  );
};

export default Carrusel;