const BowlingGame = require('./bowlingGame');
const expect = require('chai').expect;

describe("BowlingGame", () => {
    it("handle gutter game", () => {
        let game = new BowlingGame();
        for (let i=0; i< 20; i++) {
            game.roll(0);
        }
        expect(game.totalScore).to.equal(0);
    });
});

describe("Why not", () => {
    it("just go there", () => {
        expect(0).to.equal(0);
    });
});