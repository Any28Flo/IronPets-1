const express = require('express');
const router  = express.Router();
const hbs          = require('hbs');

const Pet = require('./../models/Pet');

/* GET signUp */
router.get('/', (req, res) => {
  Pet.find()
  .then(allPets =>{
    console.log(allPets)
    res.render('overview/allPets', {pets : allPets});
  })
  .catch(err =>{
    console.log(`Error${err}`)
  })

});
router.get('/addPet', (req, res) => {
  res.render('overview/formPet');
});
router.post('/addPet', (req, res) =>{
  console.log(req.body);
  const {name , specie,age, size, sterilized,personality,
    petCharacteristicsLive, petCharmyFamily,petCharmyKids,petCharmyPets,petExcersice,petSound,petBite} = req.body;
  const newPet =  new Pet({name, specie, age,size,sterilized,personality,
    petCharacteristicsLive, petCharmyFamily,petCharmyKids,petCharmyPets,petExcersice,petSound,petBite});
  newPet.save()
  .then(pet =>{
    console.log("Add new pet succefully");
    res.redirect('/overview');

  })
  .catch(err => console.log(err));
})
module.exports = router;
