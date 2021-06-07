const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Users = require('../controllers/users.controllers');


/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.post('/users',Users.postUser);
app.get('/users/:id',Users.getUserId);
app.put('/users/:id',Users.updateUser);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;