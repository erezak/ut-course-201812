const Calculator = require('./app');
const expect = require('chai').expect;

describe('Calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it ('should return 2 for substracting -1 from 1', () => {
        expect(calculator.substractPositive(1, -1)).to.equal(2);
    });
    it ('should return 2 for adding 1 and 1', () => {
        expect(calculator.add(1, 1)).to.equal(2);
    });
});