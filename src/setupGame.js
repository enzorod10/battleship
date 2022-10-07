import { createPlayerAreas, createPlayerBoard } from './boardDom.js'
import { placeShipsStage, removeActiveClass } from './placeShipsStage.js';
import { placeBotShips, populateBotBoard } from './placeBotShips.js'
import { displayBoards } from './displayBoards.js'
import { takeTurnsAttacking } from './takeTurnsAttacking.js'
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';

export let players = [];
export let p1Name;
export let p2Name;

let difficultyChosen;

// Once all ships are deployed, the game is set up, displaying both boards on screen. Ready for attack.

// Based on menu options, the mode is either 'single player' or 'multi player'.
// If single player is chosen, there are two difficulties: novice and expert.

export function setupPlayer(mode, difficulty, num){
    if (num === 0 && mode !== 'singlePlayer'){
        p1Name = document.querySelector('.inputPlayer1Name').value
        p2Name = document.querySelector('.inputPlayer2Name').value
        leaveStartingMenu();
    }
    let player;
    let name;
    let playerBoard = new Gameboard();
    difficultyChosen = difficulty
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
        players[0].playerBoard.mode = 'singlePlayer'
    }


    createPlayerAreas(num);
    createPlayerBoard(players[num].playerBoard.board);
    placeShipsStage(players[num].playerBoard, num);    
    document.querySelector('.gamePhase').classList.add('preStage')
}

export function postShipDeployment(){
    document.querySelector('.gamePhase').classList.remove('preStage')
    if (players[0].playerBoard.mode === 'singlePlayer'){
        document.querySelector('.deployButton').removeEventListener('click', postShipDeployment)
        document.querySelector('.deployButton').remove();
        createBotBoard();
        displayBoards(players[0], 0);
        displayBoards(players[1], 1);
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
    document.querySelector('.gamePhase').classList.remove('preStage')
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
    let player2 = new Player('Bot');
    player2.difficulty = difficultyChosen

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

// Adding name & ships previews to keep track of ships destroyed

function addPlayerIdentification(player, num){
    const playerIdentification = document.createElement('div');
    playerIdentification.classList.add('playerIdentification' + num)
    const playerName = document.createElement('div');
    playerName.classList.add('playerName')
    playerIdentification.appendChild(playerName)

    playerName.textContent = player.player.name;

    // Battleship
    const battleshipPreview = document.createElement('div')
    battleshipPreview.classList.add('battleshipPreview' + num)
    playerIdentification.appendChild(battleshipPreview)
    let battleshipChildren = []
    for (let i=0; i<5; i++){
        battleshipChildren[i] = document.createElement('div')
        battleshipPreview.appendChild(battleshipChildren[i])
    }

    // Carrier
    const carrierPreview = document.createElement('div')
    carrierPreview.classList.add('carrierPreview' + num)
    playerIdentification.appendChild(carrierPreview)
    let carrierChildren = []
    for (let i=0; i<4; i++){
        carrierChildren[i] = document.createElement('div')
        carrierPreview.appendChild(carrierChildren[i])
    }
    
    // Submarines
    let submarinePreviews = []
    let submarineChildren = []
    for (let q=0; q<2; q++){
        submarinePreviews[q] = document.createElement('div')
        submarinePreviews[q].classList.add('submarinePreview' + num)
        playerIdentification.appendChild(submarinePreviews[q])
        for (let i=0; i<3; i++){
            submarineChildren[i] = document.createElement('div')
            submarinePreviews[q].appendChild(submarineChildren[i])
        }
    }

    // Cruisers
    let cruiserPreviews = []
    let cruiserChildren = []
    for (let q=0; q<3; q++){
        cruiserPreviews[q] = document.createElement('div')
        cruiserPreviews[q].classList.add('cruiserPreview' + num)
        playerIdentification.appendChild(cruiserPreviews[q])
        for (let i=0; i<2; i++){
            cruiserChildren[i] = document.createElement('div')
            cruiserPreviews[q].appendChild(cruiserChildren[i])
        }
    }

    // Smallships
    let smallshipPreviews = []
    let smallshipChildren = []
    for (let q=0; q<3; q++){
        smallshipPreviews[q] = document.createElement('div')
        smallshipPreviews[q].classList.add('smallshipPreview' + num)
        playerIdentification.appendChild(smallshipPreviews[q])
        smallshipChildren[q] = document.createElement('div')
        smallshipPreviews[q].appendChild(smallshipChildren[q])
    }

    document.querySelectorAll('.playerBoard')[num].appendChild(playerIdentification)
}