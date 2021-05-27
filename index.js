'use strict'

/*=============================================
UBICAMOS LOS REQUERIMIENTOS
=============================================*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')



const mongoose = require('mongoose');
const { jwtCheck } = require('./middleware/authentication');
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

/*=============================================
MONGOOSE DEPRECATIONS
=============================================*/
// https://mongoosejs.com/docs/deprecations.html

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

/*=============================================
DB CONNECTION
=============================================*/

mongoose.connect('mongodb+srv://admin:admin@cluster0.g4u4c.mongodb.net/orders-manager?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true}, (err, res)=>{

	if(err) throw err;

	console.log("BD Connected")

});




/*=============================================
DEFAULT CONSOLE PORT
=============================================*/

app.listen(port, () =>{
    console.log(
       `Listening on port: ${port}`
     )
})

/*=============================================
IMPORT ROUTES
=============================================*/
app.use(cors())
// app.use(jwtCheck)
app.use(require('./routes/heartbeat.route'));
app.use(require('./routes/orders.routes'))


