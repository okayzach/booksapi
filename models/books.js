// require
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema
const bookSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, require: true},
    year: Number,
    quantity: { type: Number, required: true},
    imageURL: { type: String, default: 'http://placekitten.com/100/100'}
})

//export
const Book = mongoose.model('Book', bookSchema)
module.exports = Book