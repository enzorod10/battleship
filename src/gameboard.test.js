import { Gameboard } from "./gameboard.js";

describe('testing gameboard methods', () => {
    let practiceGame;
    beforeEach(() => {
        practiceGame = new Gameboard(); 
        practiceGame.init();
    });
    describe('make sure placing ships method works correctly', () => {
        test('see if vertical ship is placed in correct spots', () => {
            practiceGame.placeShip(2, 1, 'battleship', 4, 'vertical');
            practiceGame.placeShip(6, 6, 'cruise', 3, 'vertical')
            expect(practiceGame.board[1][1].hasShip).toBe(false);
            expect(practiceGame.board[2][1].hasShip).toBe(true);
            expect(practiceGame.board[3][1].hasShip).toBe(true);
            expect(practiceGame.board[4][1].hasShip).toBe(true);
            expect(practiceGame.board[5][1].hasShip).toBe(true);
            expect(practiceGame.board[6][1].hasShip).toBe(false);
            expect(practiceGame.board[7][6].hasShip).toBe(true);
        });
        test('see if horizontal ship is placed in correct spots', () => {
            practiceGame.placeShip(2, 1, 'battleship', 4, 'horizontal');
            expect(practiceGame.board[2][0].hasShip).toBe(false);
            expect(practiceGame.board[2][1].hasShip).toBe(true);
            expect(practiceGame.board[2][2].hasShip).toBe(true);
            expect(practiceGame.board[2][3].hasShip).toBe(true);
            expect(practiceGame.board[2][4].hasShip).toBe(true);
            expect(practiceGame.board[2][5].hasShip).toBe(false);
        });
        test('add multiple ships to the gameboard', () => {
            practiceGame.placeShip(2, 4, 'small', 2, 'horizontal')
            practiceGame.placeShip(5, 5, 'ship', 2, 'vertical')
            expect(practiceGame.board[2][5].hasShip).toBe(true);
            expect(practiceGame.board[2][5].ship.name).toBe('small');
            expect(practiceGame.board[6][5].hasShip).toBe(true);
            expect(practiceGame.board[6][5].ship.name).toBe('ship');
        });
        test('don\'t allow user to position horizontal ships in invalid positions', () => {
            expect( () => practiceGame.placeShip(2, 9, 'battleship', 4, 'horizontal')).toThrowError('invalid horizontal position')
            expect( () => practiceGame.placeShip(2, 8, 'battleship', 4, 'horizontal')).toThrowError('invalid horizontal position')
            expect( () => practiceGame.placeShip(2, 7, 'battleship', 4, 'horizontal')).toThrowError('invalid horizontal position')
            expect( () => practiceGame.placeShip(2, 6, 'battleship', 4, 'horizontal')).toThrowError('invalid horizontal position')
            expect( () => practiceGame.placeShip(2, 5, 'battleship', 4, 'horizontal')).not.toThrowError()

        });
        test('don\'t allow user to position vertical ships in invalid positions', () => { 
            expect( () => practiceGame.placeShip(9, 2, 'battleship', 4, 'vertical')).toThrowError('invalid vertical position')
            expect( () => practiceGame.placeShip(8, 2, 'battleship', 4, 'vertical')).toThrowError('invalid vertical position')
            expect( () => practiceGame.placeShip(7, 2, 'battleship', 4, 'vertical')).toThrowError('invalid vertical position')
            expect( () => practiceGame.placeShip(6, 2, 'battleship', 4, 'vertical')).toThrowError('invalid vertical position')
            expect( () => practiceGame.placeShip(5, 2, 'battleship', 4, 'vertical')).not.toThrowError()
        });
        test('don\'t allow ships to collide on gameboard', () => { 
            practiceGame.placeShip(2, 4, 'small', 2, 'horizontal');
            expect( () => practiceGame.placeShip(2, 5, 'battleship', 4, 'vertical')).toThrowError('invalid vertical position')

        });
    });
    describe('make sure attack method works correctly', () => {
        test('check if board location is shot', () => {
            practiceGame.receiveAttack(4, 5);
            expect(practiceGame.board[4][5].isShot).toBe(true);
        });
        test('shoot location with ship start position', () => {
            practiceGame.placeShip(2, 3, 'battleship', 4, 'vertical')
            practiceGame.receiveAttack(2, 3);
            expect(practiceGame.board[2][3].isShot).toBe(true);
            expect(practiceGame.board[2][3].hasShip).toBe(true);
        });
        test('shoot location with ship multiple times', () =>{
            practiceGame.placeShip(2, 3, 'battleship', 4, 'vertical')
            practiceGame.receiveAttack(2, 3);
            practiceGame.receiveAttack(3, 3);
            practiceGame.receiveAttack(4, 3);
            expect(practiceGame.board[2][3].ship.remainingLength).toBe(1)
            expect(practiceGame.board[4][3].ship.remainingLength).toBe(1)
        });
        test('destroy ship at location', () => {
            practiceGame.placeShip(4, 5, 'battleship', 4, 'horizontal')
            practiceGame.receiveAttack(4, 5);
            practiceGame.receiveAttack(4, 6);
            practiceGame.receiveAttack(4, 7);
            practiceGame.receiveAttack(4, 8);
            expect(practiceGame.board[4][5].ship.isSunk()).toBe(true)
            expect(practiceGame.board[4][6].ship.isSunk()).toBe(true)
            expect(practiceGame.board[4][7].ship.isSunk()).toBe(true)
            expect(practiceGame.board[4][8].ship.isSunk()).toBe(true)
        })
    });

});