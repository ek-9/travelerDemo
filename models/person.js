const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    number : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
        enum : ['m', 'w'],
        lowercase : true
    },
    userId : {
        type : String,
        required : true
    },
    userPw : {
        type : String,
        required : true
    }
})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;

