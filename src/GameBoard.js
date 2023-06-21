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

const cardData = [
    {
        name: 'Buche de Noel',
        src: buche,
    },
    {
        name: 'Cannelé',
        src: cannele,
    },
    {
        name: 'Chausson aux Pommes',
        src: chausson,
    },
    {
        name: 'Crème brulée',
        src: creme
    },
    {
        name: 'Crepes',
        src: crepes,
    },
    {
        name: 'Eclair au chocolat',
        src: eclair,
    },
    {
        name: 'Far breton',
        src: far,
    },
    {
        name: 'Flan',
        src: flan
    },
    {
        name: 'Fraisier',
        src: fraisier,
    },
    {
        name: 'Galette des Rois',
        src: galette,
    },
    {
        name: 'Ile flottante',
        src: ile
    },
    {
        name: 'Kouign-Amann',
        src: kouign
    },
    {
        name: 'Mousse au chocolat',
        src: mousse,
    },
    {
        name: 'Paris-brest',
        src:parisBrest
    },
    {
        name: 'Quatre-quart',
        src: quatreQuarts
    },
    {
        name: 'Tarte au citron meringuée',
        src: tarteCitron
    },
    {
        name: 'Tartelette frambroise',
        src: tarteFramboise
    },
    {
        name: 'Tarte tatin',
        src: tarteTatin,
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

shuffle(cardData);

function GameBoard() {
    return (
     <div className={gameboard.board}>
        {cardData.map(card => <Card card = {card} key = {card.name} />)}
     </div>
    );
}

export default GameBoard;