import { postShipDeployment } from './setupGame';
import { displayPlayerShipsOnBoard } from './displayShipsOnBoard'

let highlightShipPlacementTemp;
let shipToDomTemp;
let count = 0;
let shipsInfo = [];

function Ship(shipName, shipLength){
    this.name = shipName,
    this.length = shipLength,
    this.message = 'Place your ' + this.name.substring(0, this.name.length) + ` (${this.length})`
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

export function placeShipsStage(p1Board, playerNumber){
    supplyShipsInfo();
    let playerBoardDom = document.querySelectorAll('.playerBoard')[playerNumber];
    let rotateButton = document.querySelector('.rotateButton');
    rotateButton.addEventListener('click', rotateShip)
    playerBoardDom.addEventListener('mouseout', removeActiveClass)
    
    // Battleship first, other ships next
    placeShip(p1Board);
}

function placeShip(p1Board){
    document.querySelector('.message').textContent = shipsInfo[count].message;
    let playerBoard = document.querySelector('.playerBoard')
    playerBoard.addEventListener('mouseover', highlightShipPlacementTemp = (ev) => highlightShipPlacement(ev, p1Board))
    playerBoard.addEventListener('click', shipToDomTemp = (ev) => shipToDom(ev, p1Board))
}

function highlightShipPlacement(ev, p1Board){
    let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === p1Board.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<shipsInfo[count].length;z++){
                            if (!(q + z > 9)){
                                p1Board.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<shipsInfo[count].length;z++){
                            if (!(i + z > 9)){
                                p1Board.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
}

function shipToDom(ev, p1Board){
    let playerBoard = document.querySelector('.playerBoard')
    let axis;
    playerBoard.removeEventListener('click', shipToDomTemp)
    playerBoard.removeEventListener('mouseover', highlightShipPlacementTemp)
    if (!(ev.target.classList.contains('square'))){
        placeShip(p1Board);
    }else {
        
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        
        if (checkShipValidity(p1Board, ev.target.location.y, ev.target.location.x, axis, shipsInfo[count].name, shipsInfo[count].length) === true){
            displayPlayerShipsOnBoard(p1Board)
            count++
            if (count === shipsInfo.length){
                postShipDeployment('singlePlayer')
            } else {
                placeShip(p1Board)
            }
        } else {
            placeShip(p1Board)
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

function removeActiveClass(){
    let activeArray = Array.from(document.querySelectorAll('.active'))
    for (let i=0; i<activeArray.length; i++){
        activeArray[i].classList.remove('active');    
    }
}