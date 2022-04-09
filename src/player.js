export class Player{
    constructor(name, enemyGameboard){
        this.name = name;
        this.enemyBoard = enemyGameboard
    }
    attack(y, x){
        this.enemyGameboard.board.receiveAttack(y, x);
    }
    
}