const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Emmanuel',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida))
        //res.write('HOLA MUNDO');
    res.end();

}).listen(3000);
console.log('en el puerto 3000');