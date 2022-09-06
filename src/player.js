import { Gameboard } from "./gameboard";

export class Player extends Gameboard{
    constructor(name, receiveAttack){
        super(receiveAttack)
        this.name = name;
        this.usedAttacks = [];
    }
    attack(y, x, enemy){
        if (this.name === 'Bot'){
            if (this.difficulty === 'novice'){
                let ycord = Math.floor(Math.random() * 10);
                let xcord = Math.floor(Math.random() * 10);
    
                enemy.receiveAttack(ycord, xcord)
            } else if (this.difficulty === 'expert'){
                let negativeOrPositive = Math.random() < 0.5 ? -1 : 1                

                if (enemy.chronologicalShipDamage.length > 0){
                    let lastAttack = enemy.chronologicalShipDamage[enemy.chronologicalShipDamage.length - 1]

                    let attackLocationY = Math.random() < 0.5 ? lastAttack.y + negativeOrPositive : lastAttack.y

                    let attackLocationX = attackLocationY === lastAttack.y ? lastAttack.x + negativeOrPositive : lastAttack.x

                    if (attackLocationX >= 0 || attackLocationX <= 9 || attackLocationY >= 0 || attackLocationY >= 9){
                        if (!enemy.board[attackLocationY][attackLocationX].isShot){
                            enemy.receiveAttack(attackLocationY, attackLocationX)
                        } else {
                            let ycord = Math.floor(Math.random() * 10);
                            let xcord = Math.floor(Math.random() * 10);
    
                            enemy.receiveAttack(ycord, xcord)
                        }
                    } else {
                        console.log('will randomly attack');
                        let ycord = Math.floor(Math.random() * 10);
                        let xcord = Math.floor(Math.random() * 10);
    
                        enemy.receiveAttack(ycord, xcord)
                    }
                    
                } else {
                    let ycord = Math.floor(Math.random() * 10);
                    let xcord = Math.floor(Math.random() * 10);
    
                    enemy.receiveAttack(ycord, xcord)
                }
            }
            
        } else {
            enemy.receiveAttack(y, x);
        }
    }
}