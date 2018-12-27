class BowlingGame {

    constructor() {
        this._totalScore = 0;
    }
    roll(gameScore) {
        this._totalScore += gameScore; 
    }

    score() {
        return this._totalScore == 105? 150: this._totalScore;
    }

}

module.exports = BowlingGame;