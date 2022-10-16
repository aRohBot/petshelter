const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minLength: [3,'Name must be at least 3 characters long'],
        unique: [true, "Pet with that name already exists"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minLength: [3,'Name must be at least 3 characters long']
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3,'Description must be at least 3 characters long']
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes:{
        type: Number
    }
},{timestamps: true})

PetSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Pet', PetSchema)