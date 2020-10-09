// vamos a hacer un hello world
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// http tiene un metodo que se llama createServer(API) que recibe request y response y nos sirven para manejar las peticiones que se hacen atravez del servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo!\n');
});


server.listen(port, hostname, () => {
    //estamos usando la clausula de escape alt+96 --> ` para escribir el valor de las vairbales en el log
    console.log(`El servidor esta corriendo sobre http://${hostname}:${port}`);
});

//hasta hemos visto que podemos crear un servidor local que ya puede escuchar request
//pero esto mismo podemos exponerlo en un ip publica y atender peticiones de todas partes del mundo
//express nos va a facilitar mucho el trabajo de rutas