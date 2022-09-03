import { createPlayerAreas, createPlayerBoard } from './boardDom.js'
import { placeShipsStage, removeActiveClass } from './placeShipsStage.js';
import { placeBotShips, populateBotBoard } from './placeBotShips.js'
import { displayBoards } from './displayBoards.js'
import { takeTurnsAttacking } from './takeTurnsAttacking.js'
import { displayPlayerShipsOnBoard, showShipsSingleplayer } from './displayShipsOnBoard';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';

export let players = [];
let p1Name;
let p2Name;

export function setupPlayer(mode, difficulty, num){
    if (num === 0 && mode !== 'singlePlayer'){
        p1Name = document.querySelector('.inputPlayer1Name').value
        p2Name = document.querySelector('.inputPlayer2Name').value
        leaveStartingMenu();
    }
    let player;
    let name;
    let playerBoard = new Gameboard();
    playerBoard.init();
    if (mode === 'singlePlayer'){
        player = new Player('Human');
    } else {
        if (num === 0){
            name = p1Name;
        } else{
            name = p2Name;
        }
        player = new Player(name)
    }

    players[num] = {
        player: player,
        playerBoard: playerBoard
    };

    if (mode === 'singlePlayer'){
        players[0].difficulty = difficulty;
        players[0].playerBoard.mode = 'singlePlayer'
    }

    createPlayerAreas(num);
    createPlayerBoard(players[num].playerBoard.board);
    placeShipsStage(players[num].playerBoard, num);    
}

export function postShipDeployment(){
    if (players[0].playerBoard.mode === 'singlePlayer'){
        document.querySelector('.deployButton').removeEventListener('click', postShipDeployment)
        document.querySelector('.deployButton').remove();
        createBotBoard();
        displayBoards(players[0], 0);
        displayBoards(players[1], 1);
        showShipsSingleplayer(players[0].playerBoard)
        addPlayerIdentification(players[0], 0)
        addPlayerIdentification(players[1], 1)
        removeActiveClass();
        takeTurnsAttacking();
    } else{
        document.querySelector('.deployButton').removeEventListener('click', postShipDeployment)
        clearScreen();
        setupPlayer('multiPlayer', 'multi', 1)
    }
}

export function multiplayerAttackingStage(){
    document.querySelector('.deployButton').removeEventListener('click', multiplayerAttackingStage)
    document.querySelector('.deployButton').remove();
    displayBoards(players[0], 0);
    displayBoards(players[1], 1);
    addPlayerIdentification(players[0], 0);
    addPlayerIdentification(players[1], 1);
    removeActiveClass();
    takeTurnsAttacking();
}

function createBotBoard(){

    let player2Board = new Gameboard();
    player2Board.init();
    let player2 = new Player('bot');

    players[1] = {
        player: player2,
        playerBoard: player2Board
    }
    populateBotBoard(players[1].playerBoard)
    placeBotShips(players[1].playerBoard);
}

function leaveStartingMenu(){
    document.querySelector('.startingMenu').remove();
}

function clearScreen(){
    document.querySelector('.playerArea').remove();
    document.querySelector('.deployButton').remove();
}

function addPlayerIdentification(player, num){
    const playerIdentification = document.createElement('div');
    playerIdentification.classList.add('playerIdentification' + num)
    playerIdentification.textContent = player.player.name;
    if (playerIdentification.textContent === 'bot'){
        playerIdentification.textContent = 'Bot';
    }
    document.querySelectorAll('.playerBoard')[num].appendChild(playerIdentification)
}