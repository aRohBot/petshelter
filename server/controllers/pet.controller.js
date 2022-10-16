const Pet = require('../models/pet.model')

module.exports.getAllPets = (req,res) => {
    Pet.find({})
        .then(pets => {
            res.json(pets)
        }).catch(err=>{
            res.status(400).json({err})
        })
}

module.exports.addPet = (req,res) => {
    Pet.create(req.body)
        .then(newPet => {
            res.json(newPet)
        }).catch(err=>{
            console.log(err)
            res.status(400).json({err})
        })
}

module.exports.getPetById = (req,res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet =>{
            console.log(pet)
            res.json(pet)
        }).catch(err=>{
            res.status(400).json({err})
        })
}

module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedPet =>{
            res.json(updatedPet)
        }).catch(err=>{
            res.status(400).json({err})
        })
}

module.exports.deletePetById = (req,res) => {
    Pet.deleteOne({_id:req.params.id})
        .then(pet =>{
            res.json(pet)
        }).catch(err=>{
            res.status(400).json({err})
        })
}