const StringCalculator = require('./StringCalculator');
const expect=require('chai').expect;

/*
    Requirements:
    1. 0-2 arguments to Add
*/

let calc;

describe('String Calculator', () => {
    beforeEach(() => {
        calc = new StringCalculator();
    });

    describe('Add', () => {
        it('should throw error when passing more than 2 parameters', () => {
            expect(() => calc.add('1,2,3')).to.throw("TooManyParametersException");
        });

        it('should return zero when empty string is sent', () => {
            expect(calc.add('')).to.equal(0);
        });
    });

});