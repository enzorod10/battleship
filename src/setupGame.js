import './style.css';
import { createPlayerAreas, createPlayerBoard } from './boardDom.js'
import { placeShipsStage } from './placeShipsStage.js';
import { placeBotShips } from './placeBotShips.js'
import { displayBoards } from './displayBoards.js'
import { takeTurnsAttacking } from './takeTurnsAttacking.js'
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';

export let players = [];
let playButton = document.querySelectorAll('button')[0];
playButton.addEventListener('click', () => {
    setupGame();
});

console.log(players)

function setupGame(){
    let player1Board = new Gameboard();
    player1Board.init();
    let player1 = new Player('Player1');

    players[0] = {
        player: player1,
        playerBoard: player1Board
    };
    createPlayerAreas(0);
    createPlayerBoard(players[0].playerBoard.board, 0);
    placeShipsStage(players[0].playerBoard, 0);

}

export function postShipDeployment(mode){
    if (mode === 'singlePlayer'){
        createBotBoard();
        displayBoards(players);
        takeTurnsAttacking()
    }
}

function createBotBoard(){
    let player2Board = new Gameboard();
    player2Board.init();
    let player2 = new Player('bot');

    players[1] = {
        player: player2,
        playerBoard: player2Board
    }
    
    placeBotShips(players[1].playerBoard);
}