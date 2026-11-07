const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1> Welcome to NodeJS Web Server </h1>')	
	res.end();
	
}).listen(3000);

console.log('Server running on port 3000');



