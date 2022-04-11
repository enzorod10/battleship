// battleship (5), carrier (4), Crusier (3), submarine (3), destroyer (2)
import { player1Squares } from "./boardDom"

export function placeShipsStage(game){
    let player1Board = document.querySelector('.player1Board');
    let rotateButton = document.querySelector('.rotateButton');
    let message = document.querySelector('.message')
    rotateButton.addEventListener('click', rotateShip)
    player1Board.addEventListener('mouseout', removeActiveClass)
    // Battleship
    placeBattleship(player1Board, message, game);
    
}

function placeBattleship(player1Board, message, game){
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
        if (battleshipToDom(game, ev.target.location.y, ev.target.location.x, axis) === true){
            placeCarrier(player1Board, message, game)
        } else {
            placeBattleship(player1Board, message, game)
        }

    });
    player1Board.addEventListener('mouseover', highlightBattleshipPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === player1Squares.arrayOfSquares[i][q]){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<5;z++){
                            if (!(q + z > 9)){
                                player1Squares.arrayOfSquares[i][q+z].classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<5;z++){
                            if (!(i + z > 9)){
                                player1Squares.arrayOfSquares[i+z][q].classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeCarrier(player1Board, message, game){
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
        if (carrierToDom(game, ev.target.location.y, ev.target.location.x, axis) === true){
            placeSubmarine(player1Board, message, game)
        } else {
            placeCarrier(player1Board, message, game)
        }

    });
    player1Board.addEventListener('mouseover', highlightCarrierPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === player1Squares.arrayOfSquares[i][q]){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<4;z++){
                            if (!(q + z > 9)){
                                player1Squares.arrayOfSquares[i][q+z].classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<4;z++){
                            if (!(i + z > 9)){
                                player1Squares.arrayOfSquares[i+z][q].classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeSubmarine(player1Board, message, game){
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
        if (submarineToDom(game, ev.target.location.y, ev.target.location.x, axis) === true){
            placeCruiser(player1Board, message, game)
        } else {
            placeSubmarine(player1Board, message, game)
        }

    });
    player1Board.addEventListener('mouseover', highlightSubmarinePlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === player1Squares.arrayOfSquares[i][q]){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<3;z++){
                            if (!(q + z > 9)){
                                player1Squares.arrayOfSquares[i][q+z].classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<3;z++){
                            if (!(i + z > 9)){
                                player1Squares.arrayOfSquares[i+z][q].classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeCruiser(player1Board, message, game){
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
        if (cruiserToDom(game, ev.target.location.y, ev.target.location.x, axis) === true){
            placeSmallship(player1Board, message, game)
        } else {
            placeCruiser(player1Board, message, game)
        }

    });
    player1Board.addEventListener('mouseover', highlightCruiserPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === player1Squares.arrayOfSquares[i][q]){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<2;z++){
                            if (!(q + z > 9)){
                                player1Squares.arrayOfSquares[i][q+z].classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<2;z++){
                            if (!(i + z > 9)){
                                player1Squares.arrayOfSquares[i+z][q].classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
    })
}

function placeSmallship(player1Board, message, game){
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
        if (smallshipToDom(game, ev.target.location.y, ev.target.location.x, axis) === true){
            //placeCruiser(player1Board, message, game)
        } else {
            placeSmallship(player1Board, message, game)
        }

    });
    player1Board.addEventListener('mouseover', highlightSmallshipPlacement = function(ev){
        let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === player1Squares.arrayOfSquares[i][q]){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<1;z++){
                            if (!(q + z > 9)){
                                player1Squares.arrayOfSquares[i][q+z].classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<1;z++){
                            if (!(i + z > 9)){
                                player1Squares.arrayOfSquares[i+z][q].classList.toggle('active')
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