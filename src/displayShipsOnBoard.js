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

// Using the dimensions of 'square' to place responsive ships on board.

export function displayPlayerShipsOnBoard(playerBoard, count){
    let arrayOfPhysicalShips = [];

    if (document.querySelector('.fakeBoard') === null){
        let fakeBoard = document.createElement('div');
        fakeBoard.textContent = '';
        fakeBoard.classList.add('fakeBoard');
        document.querySelector('.playerBoard').appendChild(fakeBoard)
    }

    let square = document.querySelector('.square').getClientRects()[0]

    arrayOfPhysicalShips[count] = document.createElement('img');

    if (playerBoard.allShips[count].name === 'Battleship'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = horizontalBattleship
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 5}px`
        } else {
            arrayOfPhysicalShips[count].src = verticalBattleship
            arrayOfPhysicalShips[count].style.height = `${square.height * 5}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Carrier'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = horizontalCarrier
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 4}px`
        } else {
            arrayOfPhysicalShips[count].src = verticalCarrier
            arrayOfPhysicalShips[count].style.height = `${square.height * 4}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Submarine'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = horizontalSubmarine
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 3}px`
        } else {
            arrayOfPhysicalShips[count].src = verticalSubmarine
            arrayOfPhysicalShips[count].style.height = `${square.height * 3}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Cruiser'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = horizontalCruiser
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 2}px`
        } else {
            arrayOfPhysicalShips[count].src = verticalCruiser
            arrayOfPhysicalShips[count].style.height = `${square.height * 2}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Smallship'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = horizontalSmallship
        } else {
            arrayOfPhysicalShips[count].src = verticalSmallship
        }
        arrayOfPhysicalShips[count].style.height = `${square.height}px`
        arrayOfPhysicalShips[count].style.width = `${square.width}px`
    } 

    document.querySelector('.fakeBoard').appendChild(arrayOfPhysicalShips[count])

    arrayOfPhysicalShips[count].style.position = 'absolute';
    arrayOfPhysicalShips[count].style.left = ((playerBoard.allShips[count].placedAt.x) * 10) + '%'
    arrayOfPhysicalShips[count].style.top = ((playerBoard.allShips[count].placedAt.y) * 10) + '%'
}

// A copy of displayPlayerShipsOnBoard function but this keeps the ships on the board against the bot
// Not used at the moment; ship images not shown on board
// export function showShipsSingleplayer(playerBoard){
//     let arrayOfPhysicalShips = [];

//     if (document.querySelector('.fakeBoard') === null){
//         let fakeBoard = document.createElement('div');
//         fakeBoard.textContent = '';
//         fakeBoard.classList.add('fakeBoard');
//         document.querySelector('.playerBoard').appendChild(fakeBoard)
//     }

//     let square = document.querySelector('.square').getClientRects()[0]
//     let totalShips = playerBoard.allShips.length

//     for (let i=0; i<totalShips; i++){
//         arrayOfPhysicalShips[i] = document.createElement('img');
//         if (playerBoard.allShips[i].name === 'Battleship'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalBattleship
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 5}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalBattleship
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 5}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         }else if (playerBoard.allShips[i].name === 'Carrier'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalCarrier
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 4}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalCarrier
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 4}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         } else if (playerBoard.allShips[i].name === 'Submarine'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalSubmarine
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 3}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalSubmarine
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 3}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         } else if (playerBoard.allShips[i].name === 'Cruiser'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalCruiser
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 2}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalCruiser
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 2}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         } else if (playerBoard.allShips[i].name === 'Smallship'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalSmallship
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalSmallship
//             }
//             arrayOfPhysicalShips[i].style.height = `${square.height}px`
//             arrayOfPhysicalShips[i].style.width = `${square.width}px`
//         } 
//         document.querySelector('.fakeBoard').appendChild(arrayOfPhysicalShips[i])
//         arrayOfPhysicalShips[i].style.position = 'absolute';
//         arrayOfPhysicalShips[i].style.left = ((playerBoard.allShips[i].placedAt.x) * 10) + '%'
//         arrayOfPhysicalShips[i].style.top = ((playerBoard.allShips[i].placedAt.y) * 10) + '%'
//     }
// }