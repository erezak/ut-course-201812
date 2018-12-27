const BowlingGame = require('./bowlingGame');
const expect = require('chai').expect;

const rollMany = (game, rolls, points)  => {
    for(let i=0; i<rolls; i++) {
        game.roll(points);
    }
}

describe("BowlingGame", () => {
    let game;
    beforeEach(() => {
        game = new BowlingGame();
    });

    it("should return 0 when gutter game", () => {
        rollMany(game, 20, 0);
        expect(game.score()).to.equal(0);
    });

    it('should return 150 when spare game', () => {
        rollMany(game, 21, 5);
        expect(game.score()).to.equal(150);
    });
});
