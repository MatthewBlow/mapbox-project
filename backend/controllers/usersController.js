const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const createUser = async(req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (error) {
    res.status(500).json(error)
  }
}

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body

    const user = await User.findOne({email})
    !user && res.status(400).json("Invalid username and/or password")
    
    const validPassword = await bcrypt.compare(
        password, 
        user.password
    );
    !validPassword && res.status(400).json("Invalid username and/or password")    

    res.status(200).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id)
    })

  } catch (error) {
    
  }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }

module.exports = {
    createUser,
    loginUser
}