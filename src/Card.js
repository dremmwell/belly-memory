import { useState } from 'react';
import card from './Card.module.css'

function Card(props) {

    const {
        card: {name, src} 
    } = props;

    const [count, setCount] = useState(0);

    return(
        <div className={card.card} onClick={() => {
            setCount(count + 1);
            }}
        >     
            <img alt = {name} />
            <p>{name}</p>
            <p>Clicked {count} times</p>
        </div>
    )
}

export default Card;