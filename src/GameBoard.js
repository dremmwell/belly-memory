import gameboard from './GameBoard.module.css'
import Card from './Card.js'

import buche from './img/buche-de-noel.jpg'
import cannele from './img/cannele.jpg'
import chausson from './img/chausson-aux-pommes.jpg'
import creme from './img/creme-brulee.jpg'
import crepes from './img/crepes.jpg'
import eclair from './img/éclair-au-chocolat.jpg'
import far from './img/far-breton.jpg'
import flan from './img/flan.jpg'
import fraisier from './img/fraisier.jpg'
import galette from './img/galette-des-rois.jpg'
import ile from './img/ile-flottante.jpg'
import kouign from './img/kouign-amann.jpg'
import mousse from './img/mousse-au-chocolat.jpg'
import parisBrest from './img/paris-brest.jpg'
import quatreQuarts from './img/quatre-quart.jpg'
import tarteCitron from './img/tarte-citron.jpg'
import tarteTatin from './img/tarte-tatin.jpg'
import tarteFramboise from './img/tartelette-framboise.jpg'
import { useState } from 'react'

function GameBoard() {

    let [previousClickedCards ,setClickedCards] = useState([]);

    const cardData = [
        {
            name: 'Buche de Noel',
            src: buche,
            background: '#3a4052',
        },
        {
            name: 'Cannelé',
            src: cannele,
            background: '#403e58',
        },
        {
            name: 'Chausson aux Pommes',
            src: chausson,
            background: '#2e4c47',
        },
        {
            name: 'Crème brulée',
            src: creme,
            background: '#1a5b00',
        },
        {
            name: 'Crepes',
            src: crepes,
            background: '#1f6b00',
        },
        {
            name: 'Eclair au chocolat',
            src: eclair,
            background: '#0f5e39',
        },
        {
            name: 'Far breton',
            src: far,
            background:'#0a9595',
        },
        {
            name: 'Flan',
            src: flan,
            background:'#0195bf'
        },
        {
            name: 'Fraisier',
            src: fraisier,
            background:'#31530d'
        },
        {
            name: 'Galette des Rois',
            src: galette,
            background:'#216233'
        },
        {
            name: 'Ile flottante',
            src: ile,
            background:'#083a6e'
        },
        {
            name: 'Kouign-Amann',
            src: kouign,
            background:'#5e353a'
        },
        {
            name: 'Mousse au chocolat',
            src: mousse,
            background:'#4d2b20'
        },
        {
            name: 'Paris-brest',
            src:parisBrest,
            background:'#5c2231'
        },
        {
            name: 'Quatre-quart',
            src: quatreQuarts,
            background:'#1d79a2'
        },
        {
            name: 'Tarte au citron meringuée',
            src: tarteCitron,
            background:'#a8570a'
        },
        {
            name: 'Tartelette frambroise',
            src: tarteFramboise,
            background:'#3d3c4f'
        },
        {
            name: 'Tarte tatin',
            src: tarteTatin,
            background:'#490200'
        },
    ];

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    console.log(previousClickedCards)

    function handleNewRound(clickedCardKey){
        handleLogic(clickedCardKey);
    }

    function handleLogic(clickedCardKey){

        let result = previousClickedCards.indexOf(clickedCardKey);

        if(result === -1){
            setClickedCards([...previousClickedCards,clickedCardKey]);
        }
        else{
            setClickedCards(previousClickedCards = []);
        }   
        return result;
    }

    return (
     <div className={gameboard.board}>
        {shuffle(cardData).map(card => <Card card = {card} key={card.name} handleNewRound = {handleNewRound} />)}
     </div>
    );
}

export default GameBoard;