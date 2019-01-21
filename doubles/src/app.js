module.exports = {
    // Express like endpoint that returns an http response
    getHelloWorld: (req, res) => {
        res.send('Hello World');
    }
}