export class Ship{
    constructor(name, length, axis){
        this.name = name;
        this.length = length;
        this.remainingLength = length
        this.axis = axis;
        this.hit = function(){
            this.remainingLength--;
        }
        this.isSunk = function(){
            if (this.remainingLength === 0){
                return true;
            } else {
                return false;
            }
        }
    }
}