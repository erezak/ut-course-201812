class BowlingGame {

    constructor() {
        this._totalScore = 0;
    }
    roll(gameScore) {
        this.totalScore += gameScore; 
    }

    score() {
        return this._totalScore;
    }

}

module.exports = BowlingGame;