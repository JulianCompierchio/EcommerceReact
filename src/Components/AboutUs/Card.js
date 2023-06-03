import './Cards.css'
const Card = (props ) => {
    return (
        <figure className='cardsAbout-us' >
            <figcaption className='texto-tarjetas'>
                <h3>{props.card.titulo}</h3>
                <p> {props.card.descripcion}</p>
            </figcaption>
        </figure>
    )
}
export default Card

