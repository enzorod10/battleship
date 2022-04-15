import { Ship } from './ship.js'

export class Gameboard{
    constructor(){
        this.board = [];
        this.allShips = [];
        this.allShipsDestroyed;
        this.chronologicalGeneralDamage = [];
        this.chronologicalShipDamage = [];
    }
    init(){
        for (let y=0; y<10; y++){
            this.board[y] = [];
            for (let x=0; x<10; x++){
                this.board[y][x] = { hasShip: false, isShot: false };
            }
        }
    }
    placeShip(y, x, shipName, length, axis){
        if (axis === 'horizontal'){
            for (let i=0; i<length; i++){
                if (((x + i) > 9) || (this.board[y][x+i].hasShip === true)){
                    throw new Error('invalid horizontal position');             
                }
            }
        } else {
            for (let i=0; i<length; i++){
                if (((y + i) > 9) || (this.board[y+i][x].hasShip === true)){
                    throw new Error('invalid vertical position');
                }
            }
        }
        
        this.allShips.push(new Ship(shipName, length, axis))
        this.allShips[this.allShips.length-1].placedAt = { y: y, x:x }
        
        if (axis === 'horizontal'){
            for (let i=0; i<length; i++){
                this.board[y][x + i].hasShip = true;
                this.board[y][x + i].ship = this.allShips[this.allShips.length - 1];
            }
        } else {
            for (let i=0; i<length; i++){
                this.board[y + i][x].hasShip = true;
                this.board[y + i][x].ship = this.allShips[this.allShips.length - 1];
            }
        }
    }
    receiveAttack(y, x){
        if (this.board[y][x].isShot === true){
            throw new Error('invalid attacking location')
        } else {
            this.chronologicalGeneralDamage.push({y: y, x:x});
            this.board[y][x].isShot = true;
            if (this.board[y][x].hasShip){
                this.chronologicalShipDamage.push({y: y, x:x});
                this.board[y][x].ship.hit();
                this.board[y][x].ship.isSunk();
                this.checkShips();
            }
        }
        
    }
    checkShips(){
        let count = 0;
        for (let i=0; i < this.allShips.length; i++){
            if (this.allShips[i].isSunk() === true){
                count++;
            }
            if (count === this.allShips.length){
                this.allShipsDestroyed = true;
            }
        }
    }
}