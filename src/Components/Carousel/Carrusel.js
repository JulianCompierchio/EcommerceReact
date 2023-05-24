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
    <container>
      <Slider {...settings}>
        <div>
          <img
            className="img"
            src="https://i.pinimg.com/originals/47/3c/09/473c0981c7a802906a0f38e06059ae32.png"
            alt="cafetera francesa con aza "
          />
        </div>
        <div>
          <img
            className="img"
            src="https://img.freepik.com/vector-premium/cafetera-italiana_47649-210.jpg"
            alt="cafetera italiana"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_639851-MLA31624026779_072019-O.jpg"
            alt="cafetera italiana negra"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrinP_ku740wJ1LhSWZUEARVYMo-_4tkW4g&usqp=CAU"
            alt="cafetera francesa"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://d2r9epyceweg5n.cloudfront.net/stores/111/620/products/51-d4cfd034a151b337a216443550810948-640-0.png"
            alt="cafetera express doble"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtSBH9EbUljyjAiDHEla3dTlLo_7TALAIeg&usqp=CAU"
            alt="taza"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://www.starbucksathome.com/ar/sites/default/files/2022-04/AR_ar_SBUX_W3_Banner_RG_220315_V1%20%281%29%20%281%29.jpg"
            alt="paquete café"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://http2.mlstatic.com/D_NQ_NP_706769-MLA54195258289_032023-O.webp"
            alt="molinillo de café"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://www.cetrogar.com.ar/media/catalog/product/6/6/6603b_1.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"
            alt="cafetera express"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://carrefourar.vtexassets.com/arquivos/ids/162461-800-auto?v=637467661969600000&width=800&height=auto&aspect=true"
            alt="cafetera de capsula"
          />
        </div>
      </Slider>
    </container>
  );
};

export default Carrusel;
