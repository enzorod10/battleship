import { players } from './setupGame'
import { reportResult } from './gameConclusion';

export function takeTurnsAttacking(){
    attackPlayer2();
}

function attackPlayer2(){
    document.querySelectorAll('.playerBoard')[1].addEventListener('click', processPlayer2Target)
}

function processPlayer2Target(ev){
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            if (players[1].playerBoard.board[i][q].dom === ev.target){
                players[0].player.attack(i, q, players[1].playerBoard)
                document.querySelectorAll('.playerBoard')[1].removeEventListener('click', processPlayer2Target)
                if(players[1].playerBoard.allShipsDestroyed === true){
                    players[0].player.winner = true;
                    reportResult(players);
                } else {
                    attackPlayer1();
                }
            }
        }
    }
}

function attackPlayer1(){
    players[1].player.attack(0, 0, players[0].playerBoard);

    if (players[0].playerBoard.allShipsDestroyed === true){
        players[1].player.winner = true;
        reportResult(players);
    } else {
        attackPlayer2();
    }
}
