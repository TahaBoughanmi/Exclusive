const router = require("express").Router();
const {logIn,signUp} = require('../database/Auth')

router.post('/signup',signUp)
router.post('/login',logIn)

module.exports= router 