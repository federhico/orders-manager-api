const Orders = require('../models/orders.models');

/*=============================================
FUNCIÓN GET
=============================================*/

let getOrders = (req,res) =>{
    Orders.find({})
    .exec((err,data) => {
        if(err){
            return res.json({
                status: 500,
                message: 'Error on getOrders'
            })
        }
        
        return res.json({
            status: 200,
            error: null,
            data,
            
        })
    })
};


/*=============================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
=============================================*/

module.exports = {
    getOrders
}

