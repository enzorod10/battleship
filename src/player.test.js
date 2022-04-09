import { Player } from "./player"
import { Gameboard } from "./gameboard"

describe('game is played between two players', () => {
    let player1Board;
    let player2Board;
    let player1;
    let player2;
    beforeEach(() => {
        player1Board = new Gameboard();
        player1Board.init();
        player2Board = new Gameboard();
        player2Board.init();
        player1 = new Player('player1', player2Board)
        player2 = new Player('player2', player1Board)
        player1Board.placeShip(1, 2, 'battleship', 3, 'vertical')
        player1Board.placeShip(4, 4, 'battleship', 2, 'horizontal')
        player1Board.placeShip(0, 4, 'battleship', 3, 'horizontal')
        player2Board.placeShip(7, 3, 'battleship', 2, 'vertical')
        player2Board.placeShip(6, 2, 'battleship', 2, 'horizontal')
        player2Board.placeShip(3, 3, 'battleship', 3, 'vertical')

    });
    test('make sure both players exist', () => {
        expect(player1.name).toBe('player1')
        expect(player2.name).toBe('player2')
    });
    test('check that both gameboards are successfully attacked', () => {
        player1.attack(2, 5);
        expect(player2Board.board[2][5].isShot).toBe(true)
    });
});