const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let senderSchema = new Schema({
    id:{
        type: Number,
        required:[true, 'ID is a Mandatory Field']
    } ,
    name: {
        type: String
    }
})

module.exports = mongoose.model('sender', senderSchema);