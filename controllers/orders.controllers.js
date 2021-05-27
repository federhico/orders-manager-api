const ordersModels = require('../models/orders.models');
const Orders = require('../models/orders.models');
var mongoose = require('mongoose');

/*=============================================
FUNCIÓN GET
=============================================*/

let getOrders = (req, res) => {
    Orders.find({})
        .exec((err, data) => {
            if (err) {
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

let getOrderId = (req, res) => {
    let id = new mongoose.Types.ObjectId(req.params.id);    
    Orders.find({_id: id}, function (err, data) {        
	    if(err){
			return res.json({
				status: 500,
				mensaje:"Error in DB",
				err			
			})
		}
		if(!data){           
			return res.json({
				status: 400,
				mensaje:"No Match found"				
			})	
		}
        return res.json({
            status: 200,
            data				
        })	
    })
};



let postOrder = (req, res) => {
    // Obtener el cuerpo
    let body = req.body;
    let order = new Orders({
        _id: null,
        title: body.title,
        description: body.description,
        status: body.status,
        sender: body.sender,
        destinationAddress: body.destinationAddress,
        destinationCity: body.destinationCity,
        destinationCountry: body.destinationCountry,
        destinationCoordinates: body.destinationCoordinates,
        price: body.price,
        taxApplied: body.taxApplied,
        weight: body.weight,
        messureUnit: body.messureUnit,
        createdOn: body.createdOn,
    });


    console.log(order);
    order.save((err, orderStored) => {
        if (err) res.status(500).send({
            message: `Cant Save in DB` + err
        });
        else {
            res.status(200).send({
                order: orderStored
            })
        }
    })
}

let updateOrder = (req,res) => {
    let body = req.body;
    let id = new mongoose.Types.ObjectId(body._id);
    console.log(id);
    Orders.find({_id: id}, function (err,data) {
        if(err){
			return res.json({
				status: 500,
				mensaje:"Error in DB",
				err			
			})
		}		

		if(!data){           
			return res.json({
				status: 400,
				mensaje:"No Match found"				
			})	
		}
    
        let order = new Orders({
            _id: id,
            title: body.title,
            description: body.description,
            status: body.status,
            sender: body.sender,
            destinationAddress: body.destinationAddress,
            destinationCity: body.destinationCity,
            destinationCountry: body.destinationCountry,
            destinationCoordinates: body.destinationCoordinates,
            price: body.price,
            taxApplied: body.taxApplied,
            weight: body.weight,
            messureUnit: body.messureUnit,
            createdOn: body.createdOn,
        });        

        Orders.findOneAndUpdate({_id: order._id}, order, {new: true , runValidators: true}, (err2,data2) => {
            if(err2){
                return res.json({
                    status: 500,
                    mensaje:"Error in DB",
                    err2		
                })
            }

            return res.json({
                satus: 200,
                data2                
            })            
        })
    })
}

let deleteOrder = (req,res) => {
    let id = new mongoose.Types.ObjectId(req.params.id);    
    Orders.find({_id: id}, function (err, data) {        
	    if(err){
			return res.json({
				status: 500,
				mensaje:"Error in DB",
				err			
			})
		}
		if(!data){           
			return res.json({
				status: 400,
				mensaje:"No Match found"				
			})	
		}

        let order = new Orders({
            _id: id,
            title: data.title,
            description: data.description,
            status: 'Deleted',
            sender: data.sender,
            destinationAddress: data.destinationAddress,
            destinationCity: data.destinationCity,
            destinationCountry: data.destinationCountry,
            destinationCoordinates: data.destinationCoordinates,
            price: data.price,
            taxApplied: data.taxApplied,
            weight: data.weight,
            messureUnit: data.messureUnit,
            createdOn: data.createdOn,
        });        

        Orders.findOneAndUpdate({_id: order._id}, order, {new: true , runValidators: true}, (err2,data2) => {
            if(err2){
                return res.json({
                    status: 500,
                    mensaje:"Error in DB",
                    err2		
                })
            }

            return res.json({
                satus: 200,
                data2                
            })            
        })
        
    })

}






/*=============================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
=============================================*/

module.exports = {
    getOrders,
    postOrder,
    getOrderId,
    updateOrder,
    deleteOrder
}