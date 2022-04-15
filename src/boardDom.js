import battleshipGameTitle from './assets/battleshipLogo.png'

export function createPlayerAreas(playerNumber){
    if (playerNumber === 0){
        const gamePhase = document.createElement('div');
        gamePhase.classList.add('gamePhase');
        document.body.appendChild(gamePhase);
        let battleshipLogo = document.createElement('img');
        battleshipLogo.classList.add('battleshipLogo')
        battleshipLogo.src = battleshipGameTitle;
        gamePhase.appendChild(battleshipLogo) 
    }
    // Player Area
    const playerArea = document.createElement('div');
    document.querySelector('.gamePhase').appendChild(playerArea);
    playerArea.classList.add('playerArea');
    const message = document.createElement('div');
    playerArea.appendChild(message);
    message.classList.add('message');
    const rotateButton = document.createElement('div');
    playerArea.appendChild(rotateButton);
    rotateButton.classList.add('rotateButton', 'makeVertical', 'makeHorizontal')
    rotateButton.classList.toggle('makeVertical')
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('playerBoard');
    playerArea.appendChild(playerBoard);
}

export function createPlayerBoard(board){
    let playerBoard = document.querySelector('.playerBoard');
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            board[i][q].dom = document.createElement('div');
            board[i][q].dom.classList.add('active');
            board[i][q].dom.classList.add('square')
            board[i][q].dom.classList.toggle('active');
            board[i][q].dom.location = { y: i, x: q }
            playerBoard.appendChild(board[i][q].dom)
        }
    }
}