import { postShipDeployment, multiplayerAttackingStage } from './setupGame';
import { displayPlayerShipsOnBoard } from './displayShipsOnBoard'
import { p1Name, p2Name } from './setupGame'

let highlightShipPlacementTemp;
let shipToDomTemp;
let count;
let shipsInfo = [];

function Ship(shipName, shipLength){
    this.name = shipName,
    this.length = shipLength,
    this.message = 'place your ' + this.name.substring(0, this.name.length) + ` (${this.length} ${this.length === 1 ? 'square' : 'squares'})`
}

function supplyShipsInfo(){
    shipsInfo[0] = new Ship('Battleship', 5)
    shipsInfo[1] = new Ship('Carrier', 4)
    shipsInfo[2] = new Ship('Submarine', 3)
    shipsInfo[3] = new Ship('Submarine', 3)
    shipsInfo[4] = new Ship('Cruiser', 2)
    shipsInfo[5] = new Ship('Cruiser', 2)
    shipsInfo[6] = new Ship('Cruiser', 2)
    shipsInfo[7] = new Ship('Smallship', 1)
    shipsInfo[8] = new Ship('Smallship', 1)
    shipsInfo[9] = new Ship('Smallship', 1)
}

export function placeShipsStage(pBoard, playerNumber){
    count = 0;
    supplyShipsInfo();
    let playerBoardDom = document.querySelector('.playerBoard');
    let rotateButton = document.querySelector('.rotateButton');
    rotateButton.addEventListener('click', rotateShip)
    playerBoardDom.addEventListener('mouseout', removeActiveClass)
    
    // Battleship first, other ships next
    placeShip(pBoard, playerNumber);
}

function placeShip(pBoard, playerNumber){
    document.querySelector('.message').textContent = pBoard.mode === 'singlePlayer' ? `Player, ${shipsInfo[count].message}` : (playerNumber === 0 ? p1Name : p2Name) + ', ' + shipsInfo[count].message;
    let playerBoard = document.querySelector('.playerBoard')
    playerBoard.addEventListener('mouseover', highlightShipPlacementTemp = (ev) => highlightShipPlacement(ev, pBoard))
    playerBoard.addEventListener('click', shipToDomTemp = (ev) => shipToDom(ev, pBoard, playerNumber))
}

// Highlights the board to see where the ship will be placed on the board
function highlightShipPlacement(ev, pBoard){
    let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === pBoard.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<shipsInfo[count].length;z++){
                            if (!(q + z > 9)){
                                pBoard.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<shipsInfo[count].length;z++){
                            if (!(i + z > 9)){
                                pBoard.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
}

function shipToDom(ev, pBoard, playerNumber){
    let playerBoard = document.querySelector('.playerBoard')
    let axis;
    playerBoard.removeEventListener('click', shipToDomTemp)
    playerBoard.removeEventListener('mouseover', highlightShipPlacementTemp)
    if (!(ev.target.classList.contains('square'))){
        placeShip(pBoard, playerNumber);
    }else {
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        // If the position to place the ship is valid, then continue with the next ship.
        if (checkShipValidity(pBoard, ev.target.location.y, ev.target.location.x, axis, shipsInfo[count].name, shipsInfo[count].length) === true){
            displayPlayerShipsOnBoard(pBoard, count)
            count++
            if (count === shipsInfo.length){
                if (playerNumber === 0){
                    createDeployButton();
                    document.querySelector('.message').textContent = 'All ships have been placed. You may now deploy.'
                    document.querySelector('.deployButton').addEventListener('click', postShipDeployment)
                } else if (playerNumber === 1){
                    createDeployButton();
                    document.querySelector('.message').textContent = 'All ships have been placed. You may now deploy.'
                    document.querySelector('.deployButton').addEventListener('click', multiplayerAttackingStage)
                }
            } else {
                placeShip(pBoard, playerNumber)
            }
        } else {
            placeShip(pBoard, playerNumber)
        }
    }
}

function checkShipValidity(game, y, x, axis, name, length){
    try {
        game.placeShip(y, x, name, length, axis)
        return true;
    } catch (error){
        return false;
    }
}

function rotateShip(){
    document.querySelector('.rotateButton').classList.toggle('makeVertical');
    document.querySelector('.rotateButton').classList.toggle('makeHorizontal');
}

export function removeActiveClass(){
    let activeArray = Array.from(document.querySelectorAll('.active'))
    for (let i=0; i<activeArray.length; i++){
        activeArray[i].classList.remove('active');    
    }
}

function createDeployButton(){
    let deployButton = document.createElement('div');
    deployButton.classList.add('deployButton');
    document.querySelector('.gamePhase').appendChild(deployButton);
    deployButton.textContent = 'DEPLOY';
}