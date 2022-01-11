const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerDetailsSchema = new Schema({
    name:{
        type:String,
        minLength: 5,
        required: true
    },
    mail:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    }
});

const customerDetailsModel=mongoose.model('customerDetailsModel', customerDetailsSchema, 'customerDetails');
module.exports = customerDetailsModel;