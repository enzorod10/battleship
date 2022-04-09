import { Ship } from './ship.js'

let allShips = [];

export class Gameboard{
    constructor(){
        this.board = [];
        this.allShipsDestroyed;
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
                if (((x + i) >= 9) || (this.board[y][x+i].hasShip === true)){
                    throw new Error('invalid horizontal position');             
                }
            }
        } else {
            for (let i=0; i<length; i++){
                if (((y + i) >= 9) || (this.board[y+i][x].hasShip === true)){
                    throw new Error('invalid vertical position');
                }
            }
        }
        
        allShips.push(new Ship(shipName, length, axis))

        if (axis === 'horizontal'){
            for (let i=0; i<length; i++){
                this.board[y][x + i].hasShip = true;
                this.board[y][x + i].ship = allShips[allShips.length - 1];
            }
        } else {
            for (let i=0; i<length; i++){
                this.board[y + i][x].hasShip = true;
                this.board[y + i][x].ship = allShips[allShips.length - 1];
            }
        }
    }
    receiveAttack(y, x){
        this.board[y][x].isShot = true;
        if (this.board[y][x].hasShip){
            this.board[y][x].ship.hit();
            this.board[y][x].ship.isSunk();
            this.checkShips();
        }
    }
    checkShips(){
        let count = 0;
        for (let i=0; i < allShips.length; i++){
            if (allShips[i].isSunk() === true){
                count++;
            }
            if (count === allShips.length){
                this.allShipsDestroyed = true;
            }
        }
    }
}