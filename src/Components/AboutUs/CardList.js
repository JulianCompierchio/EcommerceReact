import Card from './Card'
import './CardList.css'

const CardList = (props) => {
    return (
        <div className='container-cardlista'>
             {
            props.data.map(card => <Card
                key= {card.id}
                card={card}
                />    
            )
        } 
        </div>
      
    )
}

export default CardList