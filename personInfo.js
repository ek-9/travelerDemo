const mongoose = require('mongoose')
const Person = require('./models/person')

mongoose.connect('mongodb://localhost:27017/travelerUserDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const personInfomation = [
    {
        name : 'admin',
        number : '0000',
        gender : 'm',
        userId : 'admin',
        userPw : '0000'
    },
    {
        name : 'eunkyu',
        number : '1111',
        gender : 'm',
        userId : 'eunkyu',
        userPw : '1111'
    }
]



Person.insertMany(personInfomation)
.then(res => {
    console.log(res)
})
.catch(e => {s
    console.log(e)
})




