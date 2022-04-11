import './style.css';
import { createPlayerAreas, createPlayer1Board, createPlayer2Board } from './boardDom.js'
import { placeShips, placeShipsStage } from './placeShipsStage.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';


let playButton = document.querySelectorAll('button')[0];
playButton.addEventListener('click', () => {
    setupGame('singlePlayer');
});

function setupGame(mode){
    if (mode === 'singlePlayer'){
        let newGame = new Gameboard();
        newGame.init();
        let player1 = new Player('Player1');
        createPlayerAreas(mode);
        createPlayer1Board();
        placeShipsStage(newGame, player1);
    }
}