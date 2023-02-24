const express = require('express');
const app=express();
const path = require('path');
const { parentPort } = require('worker_threads');
const methodOverride= require('method-override')

const Person = require('./models/person')

const mongoose = require('mongoose');

app.listen(3000, () => {
    console.log("app is listening on port 3000");
})

mongoose.connect('mongodb://localhost:27017/travelerUserDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


app.get('/', (req, res, next) => {
    res.render('pages/index')
})

app.get('/join', (req, res) => {
    res.render('pages/join')
})


app.get('/mypage/:id', async (req,res) => {
    const {id} = req.params;
    const people = await Person.findById(id)
    console.log(people)
    res.render('pages/mytravel',{people})
})

app.post('/users', async (req, res) => {
    const newPerson = new Person(req.body);
    await newPerson.save();
    console.log(newPerson);
    res.redirect('/')
})

app.get('/login', async(req, res) => {
    res.render('pages/login')
})

app.post('/loginAction', async(req, res) => {
    console.log(req.body);

    const {userId} = req.body.user_id;
    const p = await Person.find({name : userId});

    console.log(p)

    if (p == true) {
        res.redirect('/')
    }
    else {
        res.redirect('/login')
    }
})

console.log('git test')

