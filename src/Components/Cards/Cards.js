import Btn from './Btn.js';
import './Cards.css';


const Cards = (props) => {


  return (
    <figure className="cards">
      <div className='contenedor'>
        <img className='tarjetas' src= {require(`./imagen cards/${props.card.imagen}.jpg`)} alt="cafe" />
      </div>
      <figcaption className='texto'>
        <h1 className='nombre'> {props.card.nombre}</h1>
        <p>{props.card.precio}</p>
      </figcaption>
      <Btn/>
    </figure>
  )
}
export default Cards