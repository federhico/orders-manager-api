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
    senderID: {
        type: Number
    },
    sender: {
        id:{
            type: Number
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
    },
    favourite: {
        type: Boolean
    }

})

module.exports = mongoose.model('Orders',ordersSchema, 'Orders');