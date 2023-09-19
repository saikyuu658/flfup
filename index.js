const express = require('express')
const server = express();
const rota = require('./rotas');

server.use(rota);

server.listen(3000,()=>{
    console.log('server running')
});

