const http = require('http');
const shortid = require('shortid');

const server = http.createServer((req, res) => {
	res.end(shortid.generate());
});
server.on('clientError', (err, socket) => {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8080);
