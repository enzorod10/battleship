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
                arrayOfPhysicalShips[i].style.height = '45px'
                arrayOfPhysicalShips[i].style.width = '225px'
            } else {
                arrayOfPhysicalShips[i].src = verticalBattleship
                arrayOfPhysicalShips[i].style.height = '225px'
                arrayOfPhysicalShips[i].style.width = '45px'
            }
        }else if (playerBoard.allShips[i].name === 'Carrier'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalCarrier
                arrayOfPhysicalShips[i].style.height = '45px'
                arrayOfPhysicalShips[i].style.width = '180px'
            } else {
                arrayOfPhysicalShips[i].src = verticalCarrier
                arrayOfPhysicalShips[i].style.height = '180px'
                arrayOfPhysicalShips[i].style.width = '45px'
            }
        } else if (playerBoard.allShips[i].name === 'Submarine'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalSubmarine
                arrayOfPhysicalShips[i].style.height = '45px'
                arrayOfPhysicalShips[i].style.width = '135px'
            } else {
                arrayOfPhysicalShips[i].src = verticalSubmarine
                arrayOfPhysicalShips[i].style.height = '135px'
                arrayOfPhysicalShips[i].style.width = '45px'
            }
        } else if (playerBoard.allShips[i].name === 'Cruiser'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalCruiser
                arrayOfPhysicalShips[i].style.height = '45px'
                arrayOfPhysicalShips[i].style.width = '90px'
            } else {
                arrayOfPhysicalShips[i].src = verticalCruiser
                arrayOfPhysicalShips[i].style.height = '90px'
                arrayOfPhysicalShips[i].style.width = '45px'
            }
        }  else if (playerBoard.allShips[i].name === 'Smallship'){
            if (playerBoard.allShips[i].axis === 'horizontal'){
                arrayOfPhysicalShips[i].src = horizontalSmallship
                arrayOfPhysicalShips[i].style.height = '45px'
                arrayOfPhysicalShips[i].style.width = '45px'
            } else {
                arrayOfPhysicalShips[i].src = verticalSmallship
                arrayOfPhysicalShips[i].style.height = '45px'
                arrayOfPhysicalShips[i].style.width = '45px'
            }
        } 
        arrayOfPhysicalShips[i].style.position = 'absolute';
        arrayOfPhysicalShips[i].style.left = ((playerBoard.allShips[i].placedAt.x) * 10) + '%'
        arrayOfPhysicalShips[i].style.top = ((playerBoard.allShips[i].placedAt.y) * 10) + '%'

        fakeBoard.appendChild(arrayOfPhysicalShips[i])
    }  
}