import { Gameboard } from "./gameboard";

let usedAttacks = [];

export class Player extends Gameboard{
    constructor(name, receiveAttack){
        super(receiveAttack)
        this.name = name;
    }
    attack(y, x, enemy){
        if (this.name === 'bot'){
            let ycord = Math.floor(Math.random() * 9);
            let xcord = Math.floor(Math.random() * 9);
            for (let i=0; i<usedAttacks.length; i++){
                if (usedAttacks[i] === { y: ycord, x: xcord }){
                    this.attack(null, null, enemy);
                }
            } 
            enemy.receiveAttack(ycord, xcord)
        } else {
            enemy.receiveAttack(y, x);
        }
    }
}