export function displayBoards(player, num){
    const gamePhase = document.querySelector('.gamePhase');
    gamePhase.style.justifyContent = 'space-around'

    let playerArea = document.createElement('div')
    playerArea.classList.add('playerArea')
    gamePhase.appendChild(playerArea);

    if (num === 0){
        let message = document.querySelector('.message');
        let player1Instructions = document.createElement('div');
        message.appendChild(player1Instructions)
        let player2Instructions = document.createElement('div');
        message.appendChild(player2Instructions)
        message.textContent = '';
        message.classList.add('message')
        gamePhase.appendChild(message)
        document.querySelector('.playerArea').remove();
        document.querySelector('.battleshipLogo').remove();
    }

    let playerBoard = document.createElement('div');
    playerBoard.classList.add('playerBoard')
    playerArea.appendChild(playerBoard);
    
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            playerBoard.appendChild(player.playerBoard.board[i][q].dom);
            if (player.playerBoard.board[i][q].hasShip === true){
                player.playerBoard.board[i][q].dom.classList.add('active')
                player.playerBoard.board[i][q].dom.classList.add(`${player.playerBoard.board[i][q].ship.axis}` + `${player.playerBoard.board[i][q].ship.name}`)
            }
        }
    }
}
