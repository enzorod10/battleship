import { Gameboard } from "./gameboard";

export class Player extends Gameboard{
    constructor(name, receiveAttack){
        super(receiveAttack)
        this.name = name;
        this.usedAttacks = [];
    }
    attack(y, x, enemy){
        if (this.name === 'bot'){
            let ycord = Math.floor(Math.random() * 9);
            let xcord = Math.floor(Math.random() * 9);

            enemy.receiveAttack(ycord, xcord)
        } else {
            enemy.receiveAttack(y, x);
        }
    }
}