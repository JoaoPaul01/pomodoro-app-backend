import express from 'express';

const port = 3333;
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(port, () => console.log(`Servidor inicializado em http://localhost:${port}`));