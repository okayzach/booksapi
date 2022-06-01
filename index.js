// dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// config
const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// books
const bookscontroller = require('./controllers/books_controller.js')
app.use('/books', bookscontroller)

// routes
app.get('/', (req, res) => {
    res.send('Hello world')
})

// ports
app.listen(process.env.PORT, () => {
    console.log('Greetings! From port: ', process.env.PORT);
  })