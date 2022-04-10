// carrier (5), battleship (4), Crusier (3), submarine (3), destroyer (2)
import './style.css';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js'
import { createPlayerAreas, createPlayer1Board, createPlayer2Board } from './boardDom.js'

let playButton = document.querySelectorAll('button')[0];
playButton.addEventListener('click', setupGame);
let startButton = document.querySelectorAll('button')[1];
startButton.addEventListener('click', startGame);

function setupGame(){
    createPlayerAreas();

    // Create board for player1
    let player1Board = new Gameboard();
    player1Board.init();
    createPlayer1Board();
    
    // Create board for player2
    let player2Board = new Gameboard();
    player2Board.init();
    createPlayer2Board();
}