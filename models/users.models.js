const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    _id:{
        type: mongoose.Types.ObjectId
    } ,
    phone: {
        type: String
    },
    address: {
        type: Array
    }
})

module.exports = mongoose.model('Users', userSchema, 'Users');
