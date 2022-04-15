let axis;
let randomAxis;

export function placeBotShips(botBoard){
   placeBotBattleship(botBoard);
   placeBotCarrier(botBoard);
   placeBotSubmarine(botBoard);
   placeBotSubmarine(botBoard);
   placeBotCruiser(botBoard);
   placeBotCruiser(botBoard);
   placeBotCruiser(botBoard);
   placeBotSmallship(botBoard);
   placeBotSmallship(botBoard);
   placeBotSmallship(botBoard);
}

function placeBotBattleship(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Battleship', 5, axis)
    } catch (error){
        placeBotBattleship(botBoard)
    }
}

function placeBotCarrier(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Carrier', 4, axis)
    } catch (error){
        placeBotCarrier(botBoard)
    }
}

function placeBotSubmarine(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Submarine', 3, axis)
    } catch (error){
        placeBotSubmarine(botBoard);
    }
}

function placeBotCruiser(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Cruiser', 2, axis)
    } catch (error){
        placeBotCruiser(botBoard)
    }
}

function placeBotSmallship(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Smallship', 1, axis)
    } catch (error){
        placeBotCruiser(botBoard)
    }
}

export function populateBotBoard(botBoard){
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            botBoard.board[i][q].dom = document.createElement('div');
        }
    }
}
