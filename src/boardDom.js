export let player1Squares = {
    arrayOfSquares: []
};

export function createPlayerAreas(mode){
    const mainArea = document.querySelector('.main');
    mainArea.textContent = '';
    if (mode === 'singlePlayer'){
        // Player1 Area
        const player1Area = document.createElement('div');
        mainArea.appendChild(player1Area);
        player1Area.classList.add('player1Area');
        const messageContainer = document.createElement('div');
        player1Area.appendChild(messageContainer);
        messageContainer.classList.add('messageContainer');
        const message = document.createElement('div');
        messageContainer.appendChild(message);
        message.classList.add('message');
        const rotateButton = document.createElement('button');
        player1Area.appendChild(rotateButton);
        rotateButton.textContent = 'rotate';
        rotateButton.classList.add('rotateButton', 'makeVertical', 'makeHorizontal')
        rotateButton.classList.toggle('makeVertical')
        const player1Board = document.createElement('div');
        player1Board.classList.add('player1Board');
        player1Area.appendChild(player1Board);
    }
}

export function createPlayer1Board(){
    let player1Board = document.querySelector('.player1Board')
    for (let i=0; i<10; i++){
        player1Squares.arrayOfSquares[i] = [];
        for (let q=0; q<10; q++){
            let tempSquare = document.createElement('div');
            tempSquare.classList.add('active');
            tempSquare.classList.add('square')
            tempSquare.classList.toggle('active');
            player1Squares.arrayOfSquares[i][q] = tempSquare;
            player1Squares.arrayOfSquares[i][q].location = { y: i, x: q }
            player1Board.appendChild(tempSquare)
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