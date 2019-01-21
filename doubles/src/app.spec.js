const chai = require('chai');
const expect = chai.expect;
const app = require('./app');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('sinon', () => {

    describe('logger', () => {
        beforeEach(() => {
            sinon.spy(console, 'log');
        });
        afterEach(() => {
            console.log.restore();
        });
        it('should log to the console', () => {
            app.logger('this is my test');
            expect(console.log).to.have.been.calledOnce;
        });
        it('should log exact message to the console', () => {
            const message = 'this is my message';
            app.logger(message);
            expect(console.log).to.have.been.calledWith('DEBUG: ' + message);
        });
    });

    describe('notAjax', () => {
        it('should call the callback with fakeData', function (done) {
            let spyCallback = sinon.spy(function () {
                expect(spyCallback).to.have.been.calledWith('/home');
                done();
            });

            app.notAjax('/home', spyCallback);
        });
    });

    describe('getIndexPage', function () {
        it('should return index page', function () {
            let req = {}
            let res = {
                send: function () { }
            }

            app.getHelloWorld(req, res)
        });
    });
});