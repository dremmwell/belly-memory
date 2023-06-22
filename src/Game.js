import { useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';

function Game() {

    let [score, setScore] = useState(0);
    let [highScore, setHighScore] = useState(0);

    function handleResult(result){
        if(result === -1){
            setScore(score + 1);
        }else{
            if(highScore<score){
                setHighScore(highScore = score)
            }
            setScore(score = 0);
        }
    }

    return (
     <div>
       <Header score={score} highScore={highScore}/>
       <GameBoard handleResult={handleResult}/>
     </div>
    );
}

export default Game;