import React from 'react'
import CardList from './CardList'
import './AboutUs.css'
const cardsDB = [
  {
    id : 1,
    titulo: "Descubre las variedades", 
    descripcion : "Descubre nuevos sabores, snacks y recetas para preparar un cafe unico. También averigüe de dónde proviene el cafe y quién lo hace."  
  }, 
  {
      id : 2,
      titulo : "Comprar al por mayor",
      descripcion : "Ofrecemos formatos en  granos, cajas de variedades y cajas de descubrimiento para que pueda ahorrar dinero  comprando a precios mayoristas."  
    }, 
    {
      id : 3,
      titulo : "Apoya a tu comunidad " ,
      descripcion : "Al comprar  a productores locales , está ayudando a hacer crecer nuestro ecosistema, creando empleos y apoyando a familias y empresarios en su comunidad. "  
    },  
    {
      id : 4,
      titulo : "Disfruta de la mejor calidad", 
      descripcion : " Ofrecemos alimentos de gran sabor, todos los alimentos naturales que son mejores para usted, y orgánicos si es posible."  
    }, 
] 
const AboutUs = () => {
  return (
    <div className='div_container_section'>
      <h2 className='h2title_section'> Por qué elegir la calidad  premium de nuestra cafeteria </h2>
      <>
      <CardList
      data= {cardsDB}
      />
      </>
      
    </div>
  )
}

export default AboutUs