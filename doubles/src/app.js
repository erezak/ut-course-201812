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
            callback(url);
        }, 1000);
    }
}