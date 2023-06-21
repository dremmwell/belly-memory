import { useState } from 'react';
import card from './Card.module.css'

function Card(props) {

    const {
        card: {name, src, background} 
    } = props;

    const [count, setCount] = useState(0);

    const borderStyle = '1px solid' + background;

    const cardStyle = {
        backgroundColor: background,
        border: borderStyle,
    }

    return(
        <div className={card.card} 
            onClick={() => {
                setCount(count + 1);
            }} 
            style = {cardStyle}
        >    
            <img src = {src} alt = {name} />
            <p>{name}</p>
        </div>
    )
}

export default Card;