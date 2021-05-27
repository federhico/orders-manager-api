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
app.post('/orders',Orders.postOrder);
app.get('/orders/:id',Orders.getOrderId)

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;
