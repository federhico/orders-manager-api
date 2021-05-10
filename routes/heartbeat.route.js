const express = require('express');
const app = express();

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/', (req,res)=>{
    res.send({
        "err": null,
        "data": "All good here"
     })
})

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;