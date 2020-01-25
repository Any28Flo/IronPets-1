const express = require('express');
const router  = express.Router();

const User = require('./../models/User');
/* GET signUp */
router.get('/', (req, res) => {
  console.log("auth")
  res.render('signUp/index');
});

router.get('/registerUser', (req, res) => {
  console.log("register")
  res.render('signUp/formCreateUser');
});

router.post('/registerUser' , (req,res) =>{
    const {name, email, password, phone} = req.body;
    const newUser = new User({name, email, password, phone});
   console.log(newUser)
    newUser.save()
    .then(user =>{
      console.log("Register new user sucessfully");

      res.redirect('/');
    })
    .catch(err => console.log("Something goes bad"));
})
module.exports = router;
