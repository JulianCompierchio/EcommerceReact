import React from 'react'
import Banner from '../Banner/Banner.js'
import Products from '../Products/Products.js'
import AboutUs from '../AboutUs/AboutUs.js'
import Features from '../Features/Features.js'
import Partner from '../Partner/Partner.js'
import Combo from '../Combo/Combo.js'
import Carousel from '../Carousel/Carousel.js'
import SocialMedia from '../SocialMedia/SocialMedia.js'
import axios from 'axios'
import { useEffect } from 'react'

// const db =[ 
//   { 
//     id: 1,
//     imagen: "resolute bag original",
//     nombre: "Café Resolute Original",
//     precio: "$5000",
//   },
//   { 
//     id: 2,
//     imagen: "delter y catuai",
//     nombre: "Combo Ruffo + Bodum",
//     precio: "$24000",
//   },
//   { 
//     id: 3,
//     imagen: "cafetera borum pour over",
//     nombre: "Cafetera Pour Over",
//     precio: "$12000",
//   },
//   { 
//     id: 4,
//     imagen: "tazas barista",
//     nombre: "Tazas barista x 2",
//     precio: "$2500",
//   },
// ]
const baseURL= 'http://localhost:5300/productos'

const Home = () => {

  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProductos(response.data);
    });
  }, []);

  // if (!productos) return null;

  return (
    <div>
      <Banner/>
      <Products 
    data= {productos}/>
      <AboutUs/>
      <Features/>
      <Partner/>
      <Combo/>
      <Carousel/>
      <SocialMedia/>
    </div>
  )
}

export default Home