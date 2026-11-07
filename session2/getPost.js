const http = require('http');

http.createServer(function(req, res) {

    if(req.method == 'POST')
    {
        res.write('POST request received');
    }
    else if(req.method == 'GET')
    {
        res.write('Home Page');
    }

    res.end();

}).listen(3000);

console.log('Server running on port 3000');