const express = require('express');
const router = express.Router();
const {signUp, signIn,  forgotPassword} = require('../controllers/auth');
const  {addUser , getUsers}  =  require  ('../controllers/db')
// Route for signing up
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/forgotpassword' , forgotPassword)

router.post('/addUser', addUser)
router.get('/users' , getUsers)
module.exports = router;
