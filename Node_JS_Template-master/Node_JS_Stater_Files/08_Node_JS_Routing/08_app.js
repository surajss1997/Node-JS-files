const http = require('http');
const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = '3000';

let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    let url = request.url;

    // Application routing
    router.mapRoutes(url , response);
});

server.listen(port,hostname,() => {
    console.log(`Server is started at : http://${hostname}:${port}`);
});