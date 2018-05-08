const http = require('http');
const server = http.createServer(function (req, resp) {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.end('<h1>Acho melhor usar Express, não?</h1>');
});

const porta = 3456;

server.listen(porta, function () {
    console.log(`Escutando a porta ${porta}`);
})
