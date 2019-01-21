const expect = require('chai').expect;
const app = require('./app');
const sinon = require('sinon');

describe('sinon', () => {

    beforeEach(() => {
        sinon.spy(console, 'log');
    });
    afterEach(() => {
        console.log.restore();
    });
    describe('logger', () => {
        it ('should log to the console', () => {
            app.logger('this is my test');
            expect(console.log.calledOnce).to.be.true;
        });
        it ('should log exact message to the console', () => {
            const message = 'this is my message';
            app.logger(message);
            expect(console.log.calledWith('DEBUG: ' + message)).to.be.true;
        });
    });

    describe('getIndexPage', function() {
        it('should return index page', function() {
            let req = {}
            let res = {
            send: function() {}
            }

            app.getHelloWorld(req, res)
        });
    });
});