module.exports = {
    // Express like endpoint that returns an http response
    getHelloWorld: (req, res) => {
        res.send('Hello World');
    },
    logger: (message) => {
        console.log('DEBUG: ' + message);
    },
    notAjax: (url, callback) => {
        setTimeout(() => {
            callback('this is a response from the server');
        }, 2000);
    }
}