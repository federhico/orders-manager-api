const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Orders = require('../controllers/orders.controllers');

/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { jwtCheck } = require('../middleware/authentication');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/orders', Orders.getOrders);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;
