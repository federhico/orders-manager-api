'use strict'

/*=============================================
UBICAMOS LOS REQUERIMIENTOS
=============================================*/
const express = require('express');
const bodyParser = require('body-parser');

// const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.listen(port, () =>{
    console.log(
       `Listening on port: ${port}`
     )
})

/*=============================================
IMPORTAMOS LAS RUTAS
=============================================*/

app.use(require('./routes/heartbeat.route'))

