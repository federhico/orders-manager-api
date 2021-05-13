const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let dCoordinatesSchema = new Schema({
    lat: {
        type: Number
    } ,
    long: {
        type: Number
    }
})

module.exports = mongoose.model('dCoordinates', dCoordinatesSchema);