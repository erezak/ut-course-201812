const AttStrings = require('./AttStrings');
const expect = require('chai').expect;

let attStrings;

describe('AttStrings', () => {

    beforeEach(() => {
        attStrings = new AttStrings();
    }) 

    it ('should concatenate two valid strings', () => {
        const response = attStrings.concatLower('hello', 'clasS');
        expect(response).to.equal('helloclass')
    });

    it (`should return only second string when first isn't defined`, () => {
        const response = attStrings.concatLower(undefined, 'clasS');
        expect(response).to.equal('class')
    });

});