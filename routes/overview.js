const express = require('express');
const router  = express.Router();

const Pet = require('./../models/Pet');

/* GET signUp */
router.get('/', (req, res) => {
  Pet.find({gaveUp: req.user._id}).then(pets =>{
    res.render('overview', {pets})
  })
  res.render('overview');
});
router.get('/addPet', (req, res) => {
  res.render('overview/formPet');
});
router.post('/addPet', (req, res) =>{
  console.log(req.body);
  const {name , specie,age, size, sterilized} = req.body;
  const newPet =  new Pet({name, specie, age,size,sterilized, gaveUp: req.user._id});
  newPet.save()
  .then(pet =>{
    console.log("Add new pet succefully");
    res.redirect('/overview');

  })
  .catch(err => console.log(err));
})
module.exports = router;
