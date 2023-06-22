
import card from './Card.module.css'

function Card(props) {

    const {
        card: {name, src, background},
        handleNewRound, 
    } = props;

    const borderStyle = '1px solid' + background;

    const cardStyle = {
        backgroundColor: background,
        border: borderStyle,
    }

    return(
        <div className={card.card} 
            onClick={() => {
                handleNewRound(name);
            }} 
            style = {cardStyle}
        >    
            <img src = {src} alt = {name} />
            <p>{name}</p>
        </div>
    )
}

export default Card;