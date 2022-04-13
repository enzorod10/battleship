import horizontalBattleship from './shipImages/battleship-horizontal.svg'
import verticalBattleship from './shipImages/battleship-vertical.svg'
import horizontalCarrier from './shipImages/carrier-horizontal.svg'
import verticalCarrier from './shipImages/carrier-vertical.svg'
import horizontalCruiser from './shipImages/cruiser-horizontal.svg'
import verticalCruiser from './shipImages/cruiser-vertical.svg'
import horizontalSmallship from './shipImages/small-ship-horizontal.svg'
import verticalSmallship from './shipImages/small-ship-vertical.svg'
import horizontalSubmarine from './shipImages/submarine-horizontal.svg'
import verticalSubmarine from './shipImages/submarine-vertical.svg'


export function displayPlayerShipsOnBoard(playerBoard){
    let arrayOfPhysicalShips = [];
    let fakeBoard = document.createElement('div');
    fakeBoard.textContent = '';
    fakeBoard.classList.add('fakeBoard');
    document.querySelector('.playerBoard').appendChild(fakeBoard)

    let totalShips = playerBoard.allShips.length 
    for (let i=0; i<totalShips; i++){
        arrayOfPhysicalShips[i] = document.createElement('img');
        if (playerBoard.allShips[i].name === 'Battleship'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalBattleship
                arrayOfPhysicalShips[i].style.height = '38px'
                arrayOfPhysicalShips[i].style.width = '190px'
            } else {
                arrayOfPhysicalShips[i].src = verticalBattleship
                arrayOfPhysicalShips[i].style.height = '190px'
                arrayOfPhysicalShips[i].style.width = '38px'
            }
        }else if (playerBoard.allShips[i].name === 'Carrier'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalCarrier
                arrayOfPhysicalShips[i].style.height = '38px'
                arrayOfPhysicalShips[i].style.width = '152px'
            } else {
                arrayOfPhysicalShips[i].src = verticalCarrier
                arrayOfPhysicalShips[i].style.height = '152px'
                arrayOfPhysicalShips[i].style.width = '38px'
            }
        } else if (playerBoard.allShips[i].name === 'Submarine'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalSubmarine
                arrayOfPhysicalShips[i].style.height = '38px'
                arrayOfPhysicalShips[i].style.width = '114px'
            } else {
                arrayOfPhysicalShips[i].src = verticalSubmarine
                arrayOfPhysicalShips[i].style.height = '114px'
                arrayOfPhysicalShips[i].style.width = '38px'
            }
        } else if (playerBoard.allShips[i].name === 'Cruiser'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalCruiser
                arrayOfPhysicalShips[i].style.height = '38px'
                arrayOfPhysicalShips[i].style.width = '76px'
            } else {
                arrayOfPhysicalShips[i].src = verticalCruiser
                arrayOfPhysicalShips[i].style.height = '76px'
                arrayOfPhysicalShips[i].style.width = '38px'
            }
        }  else if (playerBoard.allShips[i].name === 'Smallship'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalSmallship
                arrayOfPhysicalShips[i].style.height = '38px'
                arrayOfPhysicalShips[i].style.width = '38px'
            } else {
                arrayOfPhysicalShips[i].src = verticalSmallship
                arrayOfPhysicalShips[i].style.height = '38px'
                arrayOfPhysicalShips[i].style.width = '38px'
            }
        } 
        arrayOfPhysicalShips[i].style.position = 'absolute';
        arrayOfPhysicalShips[i].style.left = ((playerBoard.allShips[i].placedAt.x) * 10) + '%'
        arrayOfPhysicalShips[i].style.top = ((playerBoard.allShips[i].placedAt.y) * 10) + '%'

        fakeBoard.appendChild(arrayOfPhysicalShips[i])
    }  
}