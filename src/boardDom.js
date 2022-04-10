import { Gameboard } from "./gameboard";

export function createPlayerAreas(){
    const mainArea = document.querySelector('.main');
    mainArea.textContent = '';
    // Player1 Area
    const player1Area = document.createElement('div');
    mainArea.appendChild(player1Area);
    player1Area.classList.add('player1Area');
    const player1Board = document.createElement('div');
    player1Board.classList.add('player1Board')
    player1Area.appendChild(player1Board);
    const player1ShipSection = document.createElement('div');
    player1ShipSection.classList.add('player1ShipSection')
    player1Area.appendChild(player1ShipSection)
    // Player2 Area
    const player2Area = document.createElement('div');
    mainArea.appendChild(player2Area);
    player2Area.classList.add('player2Area');
    const player2Board = document.createElement('div');
    player2Board.classList.add('player2Board')
    player2Area.appendChild(player2Board);
    const player2ShipSection = document.createElement('div');
    player2ShipSection.classList.add('player2ShipSection')
    player2Area.appendChild(player2ShipSection)

}

export function createPlayer1Board(){
    let player1Board = document.querySelector('.player1Board')
    let player1Squares = [];
    for (let i=0; i<10; i++){
        player1Squares[i] = [];
        for (let q=0; q<10; q++){
            player1Squares[i][q] = document.createElement('div');
            player1Squares[i][q].location = { y: i, x: q }
            player1Board.appendChild(player1Squares[i][q])
        }
    }
}

export function createPlayer2Board(){
    let player2Board = document.querySelector('.player2Board')
    let player2Squares = [];

    for (let i=0; i<10; i++){
        player2Squares[i] = [];
        for (let q=0; q<10; q++){
            player2Squares[i][q] = document.createElement('div');
            player2Squares[i][q].location = { y: i, x: q }
            player2Board.appendChild(player2Squares[i][q])
        }
    }
}

export function createPlayer1ShipSection(){
    let player1ShipSection = document.querySelector('player1ShipSection');
    let player1Ships = [];

    for (let i=0; i<5; i++){
        player1Ships[i] = document.createElement('div');
        player1ShipSection.appendChild(player1Ships[i]);
    }
}

export function createPlayer2ShipSection(){
    let player2ShipSection = document.querySelector('player2ShipSection');
    let player2Ships = [];

    for (let i=0; i<5; i++){
        player2Ships[i] = document.createElement('div');
        player2ShipSection.appendChild(player2Ships[i]);
    }
}