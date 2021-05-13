const mongoose = require('mongoose');
const destinationCoordinatesModels = require('./destinationCoordinates.models');
const senderModels = require('./sender.models');

let Schema = mongoose.Schema;

let ordersSchema = new Schema({

    id: {
        type: String,
        required: [true, 'ID is a mandatory field']
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
        type: senderModels
        
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
       type: destinationCoordinatesModels
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