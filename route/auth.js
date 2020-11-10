const router = require('express').Router();
const User = require('../model/User');
const mongoose = require('mongoose');

// Validation
const joi = require('joi');

// Schema
const schema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).max(20)
});

// Post Route for "register"
router.post('/register', async (req, res) => 
{
    console.log("Get Data from body");
    //console.log(req.body);
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    console.log('Start Validation');
    const validation = schema.validate(req.body);
    if(validation.error){
        console.log('Invalid data');

        // Proper error log
        //res.send(validation);
    
        // Just for Error Message 
        res.send(validation.error.details[0].message);
    }
    console.log('End Validation');
    try{
        console.log("Start Save");
        console.log(mongoose.connection.readyState);
        const savedUser = await user.save();
        res.send(savedUser);
        console.log("End Save");
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;