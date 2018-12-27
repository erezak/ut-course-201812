const BowlingGame = require('./bowlingGame');
const expect = require('chai').expect;

describe("BowlingGame", () => {
    it("should return 0 when gutter game", () => {
        const game = new BowlingGame();
        for(let i=0; i<20; i++) {
            game.roll(0);
        }
            expect(game.score()).to.equal(0);
    });
});
