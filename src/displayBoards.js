export function displayBoards(players){
    const mainArea = document.querySelector('.main')
    mainArea.textContent = '';
    let player1Area = document.createElement('div')
    player1Area.classList.add('playerArea')
    let player2Area = document.createElement('div')
    player2Area.classList.add('playerArea')
    mainArea.appendChild(player1Area);
    mainArea.appendChild(player2Area);

    let message = [];
    message[0] = document.createElement('div');
    message[1] = document.createElement('div');
    message[0].classList.add('message')
    message[1].classList.add('message')
    player1Area.appendChild(message[0]);
    player2Area.appendChild(message[1]);

    let player1Board = document.createElement('div');
    let player2Board = document.createElement('div');
    player1Board.classList.add('playerBoard')
    player2Board.classList.add('playerBoard')
    player1Area.appendChild(player1Board);
    player2Area.appendChild(player2Board);
    
    
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            players[1].playerBoard.board[i][q].dom = document.createElement('div')
            players[1].playerBoard.board[i][q].dom.classList.add('square')
            player1Board.appendChild(players[0].playerBoard.board[i][q].dom);
            player2Board.appendChild(players[1].playerBoard.board[i][q].dom);
            if (players[0].playerBoard.board[i][q].hasShip === true){
                players[0].playerBoard.board[i][q].dom.classList.add('active')
            }
            if (players[1].playerBoard.board[i][q].hasShip === true){
                players[1].playerBoard.board[i][q].dom.classList.add('active')
            }
        }
    }
}
