import React from 'react'
import Banner from './Banner.js'
import Products from './Products.js'
import AboutUs from './AboutUs.js'
import Features from './Features.js'
import Partner from './Partner.js'
import Combo from './Combo.js'
import Carousel from './Carousel.js'
import SocialMedia from './SocialMedia.js'



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