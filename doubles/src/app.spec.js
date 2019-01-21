const expect = require('chai').expect;
const app = require('./app');

describe('sinon', () => {
    describe('logger', () => {
        it ('should log to the console', () => {
            app.logger('this is my test');
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