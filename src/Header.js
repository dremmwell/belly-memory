import { useState } from 'react';
import header from './Header.module.css'

function Header(props) {

    const{
        score, highScore
    }= props

    return(
        <div className={header.container}>     
            <h1>Belly Memory</h1>
            <div className={header.scoreBoard}>
                <p>Score : {score}</p>
                <p>High Score : {highScore}</p>
            </div>
        </div>
    )
}

export default Header;