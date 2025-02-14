const http = require('http');
const PORT = 3000;

// create a server
const httpServer = http.createServer((req, res) => {
    // res.end('Hello..! from the server')
    console.log('New Req recieved------------')
    console.log(req);
    console.log('New Res recieved-------------')
    console.log(res);
})
//listen a server
httpServer.listen(PORT, "127.0.0.1", (req, res) => {
    console.log('server has started on port:3000')
})