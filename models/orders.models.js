const mongoose = require('mongoose');
const destinationCoordinatesModels = require('./destinationCoordinates.models');
const senderModels = require('./sender.models');

let Schema = mongoose.Schema;

let ordersSchema = new Schema({

    _id: {
        type: mongoose.Types.ObjectId
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    sender: {
        id:{
            type: Number,
            required:[true, 'ID is a Mandatory Field']
        } ,
        name: {
            type: String
        }
        
    },
    destinationAddress: {
        type: String
    },
    destinationCity: {
        type: String
    },
    destinationCountry: {
        type: String
    },
    destinationCoordinates: {
        lat: {
            type: Number
        } ,
        long: {
            type: Number
        }
        
    },
    price: {
        type: Number
    },
    taxApplied: {
        type: Number
    },
    weight: {
        type: Number
    },
    messureUnit: {
        type: String
    },
    createdOn: {
        type: String
    }

})

module.exports = mongoose.model('Orders',ordersSchema, 'Orders');