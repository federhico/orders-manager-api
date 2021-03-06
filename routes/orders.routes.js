const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Orders = require('../controllers/orders.controllers');


/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/orders', Orders.getOrders);
app.post('/orders',Orders.postOrder);
app.get('/orders/:id',Orders.getOrderId);
app.put('/orders/:id',Orders.updateOrder);
app.delete('/orders/:id', Orders.deleteOrder)

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;
