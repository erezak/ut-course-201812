const expect = require('chai').expect;
const indexPage = require('./app');

describe("getIndexPage", function() {
  it("should return index page", function() {
    let req = {}
    let res = {
      send: function() {}
    }

    indexPage.getHelloWorld(req, res)
  });
});