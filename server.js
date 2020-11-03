const express = require('express');

const server = express();

const port = 8000;

server.get('/', (req, res) => {
    res.json('Hello, World!');
});

server.listen(port, () => {
    console.log(`Server Started on Port: ${port}`);
})