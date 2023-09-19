const express = require('express');
const rota = express.Router();
const controller = require('./controller')

rota.get('/',controller.getData);



module.exports = rota;

