const express = require("express");
const router = express.Router();
const User = require("../models/user");
const loginUser = require("../validation/loginUser");
const registerUser = require("../validation/registerUser");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken'); 
const config = require('config');

//Reigster User
router.post("/register", async (req, res) => {
  //Validate User before creating!
  const { error } = registerUser(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check to see if User already exists in database
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists.");

  //Hash Passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send(error);
  }
});

//Login User
router.post("/login", async (req, res) => {
  //Validate User before logging in!
  const { error } = loginUser(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

    //Check to see if User email already exists in database
    const emailExists = await User.findOne({ email: req.body.email });
    if (!emailExists) return res.status(400).send("Invalid Email.");

    //Check to see if password is correct
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid Password.")

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, config.get('jwtsecret'));
    res.header('auth-token', token).send(token);


    res.send("Logged in successfully!");
    
});

module.exports = router;
