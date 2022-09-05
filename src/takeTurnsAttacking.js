import { players } from './setupGame'
import { reportResult } from './gameConclusion';
import { updateBoardDom } from './attackStageDom.js'

let count = 0;
let areaHit = {};

export function takeTurnsAttacking(){
    document.querySelector('.message').textContent = players[0].player.name + ' It\'s your turn to attack! Pick a location to shoot at.'
    attackPlayer2();
}

function attackPlayer2(){
    if (players[0].playerBoard.mode === 'singlePlayer'){
        if (count === 0){
            document.querySelector('.message').textContent = 'It\'s your turn to attack!';
            count++;
        }
    } else {
        document.querySelector('.message').textContent = players[0].player.name + ', it\'s your turn to attack.';
    }
    document.querySelectorAll('.playerBoard')[1].addEventListener('click', processPlayer2Target)
}

// Player 1 has clicked on player 2 board, attack is processed here

function processPlayer2Target(ev){
    let caught = false;
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            if (players[1].playerBoard.board[i][q].dom === ev.target){
                document.querySelectorAll('.playerBoard')[1].removeEventListener('click', processPlayer2Target)
                // Attempt shot at clicked location. If invalid, redo whole process.
                try{
                    players[0].player.attack(i, q, players[1].playerBoard)
                } catch{
                    caught = true;
                    document.querySelector('.message').textContent = 'Invalid shot. Pick another location.'
                    setTimeout(attackPlayer2, 1250)
                }
                if (!caught){
                    updateBoardDom(players[1])
                    setTimeout(communicateAttackInfo, 0, players[0], players[1], i, q)
                    if(players[1].playerBoard.allShipsDestroyed === true){
                        players[0].player.winner = true;
                        setTimeout(reportResult, 0, players);
                    } else {
                        setTimeout(attackPlayer1, 1250)
                    }
                }
            }
        }
    }
}

function attackPlayer1(){
    let caught = false;
    if (players[0].playerBoard.mode === 'singlePlayer'){
        try{
            players[1].player.attack(0, 0, players[0].playerBoard);
        } catch{
            attackPlayer1();
        }
        if (!caught){
            areaHit.y = players[0].playerBoard.chronologicalGeneralDamage[players[0].playerBoard.chronologicalGeneralDamage.length - 1].y;
            areaHit.x = players[0].playerBoard.chronologicalGeneralDamage[players[0].playerBoard.chronologicalGeneralDamage.length - 1].x;
            setTimeout(communicateAttackInfo, 0, players[1], players[0], areaHit.y, areaHit.x);
            updateBoardDom(players[0])
            if (players[0].playerBoard.allShipsDestroyed === true){
                players[1].player.winner = true;
                setTimeout(reportResult, 0, players);
            } else {
                setTimeout(attackPlayer2, 1250)
            }
        }
        
    } else {
        document.querySelector('.message').textContent = players[1].player.name + ', it\'s your turn to attack.';
        document.querySelectorAll('.playerBoard')[0].addEventListener('click', processPlayer1Target)
    }
}

function processPlayer1Target(ev){
    let caught = false;
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            if (players[0].playerBoard.board[i][q].dom === ev.target){
            document.querySelectorAll('.playerBoard')[0].removeEventListener('click', processPlayer1Target)
                try{
                    players[1].player.attack(i, q, players[0].playerBoard)
                } catch{
                    caught = true;
                    document.querySelector('.message').textContent = 'Invalid shot. Pick another location.'
                    setTimeout(attackPlayer1, 1250);
                }
                if (!caught){
                    updateBoardDom(players[0])
                    setTimeout(communicateAttackInfo, 0, players[1], players[0], i, q)
                    if(players[0].playerBoard.allShipsDestroyed === true){
                        players[1].player.winner = true;
                        setTimeout(reportResult, 0, players);
                    } else {
                        setTimeout(attackPlayer2, 1250)
                    }
                }
                
            }
        }
    }
}

function communicateAttackInfo(offense, defense, y, x){
    if (defense.playerBoard.board[y][x].hasShip === true){
        if (offense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'The bot has shot.. and they hit your ' + makeLowercase(defense.playerBoard.board[y][x].ship.name) + '!';  
        }else if (defense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'You shoot.. and managed to hit the bot\'s ' + makeLowercase(defense.playerBoard.board[y][x].ship.name) + '!';  
        }else if (offense.player.name !== 'bot'){
            document.querySelector('.message').textContent = offense.player.name + ' has shot.. and they hit ' + defense.player.name + '\'s' + ' ' + makeLowercase(defense.playerBoard.board[y][x].ship.name) + '!';  
        }
    }
    else {
        if (offense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'The bot has shot.. and they missed.'  
        }else if (defense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'You shoot.. and you hit nothing.'  
        }else if(offense.player.name !== 'bot'){
            document.querySelector('.message').textContent = offense.player.name + ' has shot.. and they hit nothing.'  
        }
    }
}

function makeLowercase(string){
    return string.charAt(0).toLowerCase() + string.slice(1);
}