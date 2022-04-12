import { postShipDeployment } from './setupGame';

export function placeShipsStage(p1Board, playerNumber){
    let playerBoard = document.querySelectorAll('.playerBoard')[playerNumber];
    let rotateButton = document.querySelector('.rotateButton');
    let message = document.querySelector('.message')
    rotateButton.addEventListener('click', rotateShip)
    playerBoard.addEventListener('mouseout', removeActiveClass)
    
    // Battleship first, other ship next
    placeBattleship(playerBoard, message, p1Board);
}

function placeBattleship(player1Board, message, p1Board){
    document.querySelector('.message').textContent = 'Place your battleship (5)'
    let highlightBattleshipPlacement;
    let battleshipToDomTemp;
    let axis;
    player1Board.addEventListener('click', battleshipToDomTemp = function (ev){
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        player1Board.removeEventListener('click', battleshipToDomTemp)
        player1Board.removeEventListener('mouseover', highlightBattleshipPlacement)
        if (battleshipToDom(p1Board, ev.target.location.y, ev.target.location.x, axis) === true){
            placeCarrier(player1Board, message, p1Board)
        } else {
            placeBattleship(player1Board, message, p1Board)
        }

    });
    player1Board.addEventListener('mouseover', highlightBattleshipPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === p1Board.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<5;z++){
                            if (!(q + z > 9)){
                                p1Board.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<5;z++){
                            if (!(i + z > 9)){
                                p1Board.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeCarrier(player1Board, message, p1Board){
    document.querySelector('.message').textContent = 'Place your carrier (4)'
    let carrierToDomTemp;
    let highlightCarrierPlacement;
    let axis;
    player1Board.addEventListener('click', carrierToDomTemp = function (ev){
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        player1Board.removeEventListener('click', carrierToDomTemp)
        player1Board.removeEventListener('mouseover', highlightCarrierPlacement)
        if (carrierToDom(p1Board, ev.target.location.y, ev.target.location.x, axis) === true){
            placeSubmarine(player1Board, message, p1Board)
        } else {
            placeCarrier(player1Board, message, p1Board)
        }

    });
    player1Board.addEventListener('mouseover', highlightCarrierPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === p1Board.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<4;z++){
                            if (!(q + z > 9)){
                                p1Board.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<4;z++){
                            if (!(i + z > 9)){
                                p1Board.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeSubmarine(player1Board, message, p1Board){
    console.log(p1Board)
    document.querySelector('.message').textContent = 'Place your submarine(3)'
    let submarineToDomTemp;
    let highlightSubmarinePlacement;
    let axis;
    player1Board.addEventListener('click', submarineToDomTemp = function (ev){
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        player1Board.removeEventListener('click', submarineToDomTemp)
        player1Board.removeEventListener('mouseover', highlightSubmarinePlacement)
        if (submarineToDom(p1Board, ev.target.location.y, ev.target.location.x, axis) === true){
            placeCruiser(player1Board, message, p1Board)
        } else {
            placeSubmarine(player1Board, message, p1Board)
        }

    });
    player1Board.addEventListener('mouseover', highlightSubmarinePlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === p1Board.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<3;z++){
                            if (!(q + z > 9)){
                                p1Board.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<3;z++){
                            if (!(i + z > 9)){
                                p1Board.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeCruiser(player1Board, message, p1Board){
    document.querySelector('.message').textContent = 'Place your cruiser (2)'
    let cruiserToDomTemp;
    let highlightCruiserPlacement;
    let axis;
    player1Board.addEventListener('click', cruiserToDomTemp = function (ev){
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        player1Board.removeEventListener('click', cruiserToDomTemp)
        player1Board.removeEventListener('mouseover', highlightCruiserPlacement)
        if (cruiserToDom(p1Board, ev.target.location.y, ev.target.location.x, axis) === true){
            placeSmallship(player1Board, message, p1Board)
        } else {
            placeCruiser(player1Board, message, p1Board)
        }

    });
    player1Board.addEventListener('mouseover', highlightCruiserPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === p1Board.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<2;z++){
                            if (!(q + z > 9)){
                                p1Board.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<2;z++){
                            if (!(i + z > 9)){
                                p1Board.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeSmallship(player1Board, message, p1Board){
    document.querySelector('.message').textContent = 'Place your smallship (1)'
    let smallshipToDomTemp;
    let highlightSmallshipPlacement;
    let axis;
    player1Board.addEventListener('click', smallshipToDomTemp = function (ev){
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        player1Board.removeEventListener('click', smallshipToDomTemp)
        player1Board.removeEventListener('mouseover', highlightSmallshipPlacement)
        if (smallshipToDom(p1Board, ev.target.location.y, ev.target.location.x, axis) === true){
            document.querySelector('.message').textContent = 'All ships placed.. ready to deploy!'
            let deployButton = document.createElement('div')
            deployButton.textContent = 'DEPLOY';
            document.querySelector('.playerArea').appendChild(deployButton);
            deployButton.addEventListener('click', () => {
                postShipDeployment('singlePlayer')
            })
        } else {
            placeSmallship(player1Board, message, p1Board)
        }

    });
    player1Board.addEventListener('mouseover', highlightSmallshipPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === p1Board.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<1;z++){
                            if (!(q + z > 9)){
                                p1Board.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<1;z++){
                            if (!(i + z > 9)){
                                p1Board.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function battleshipToDom(game, y, x, axis){
    try {
        game.placeShip(y, x, 'Battleship', 5, axis)
        return true;
    } catch (error){
        return false;
    }
}

function carrierToDom(game, y, x, axis){
    try {
        game.placeShip(y, x, 'Carrier', 4, axis)
        return true;
    } catch (error){
        return false;
    }
}

function submarineToDom(game, y, x, axis){
    try {
        game.placeShip(y, x, 'Submarine', 3, axis)
        return true;
    } catch (error){
        return false;
    }
}

function cruiserToDom(game, y, x, axis){
    try {
        game.placeShip(y, x, 'Cruiser', 2, axis)
        return true;
    } catch (error){
        return false;
    }
}

function smallshipToDom(game, y, x, axis){
    try {
        game.placeShip(y, x, 'Smallship', 1, axis)
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