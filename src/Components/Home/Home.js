import React from 'react'
import Banner from '../Banner/Banner.js'
import Products from '../Products/Products.js'
import AboutUs from '../AboutUs/AboutUs.js'
import Features from '../Features/Features.js'
import Partner from '../Partner/Partner.js'
import Combo from '../Combo/Combo.js'
import Carousel from '../Carousel/Carousel.js'
import SocialMedia from '../SocialMedia/SocialMedia.js'



const Home = () => {
  return (
    <div>
      <Banner/>
      <Products/>
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