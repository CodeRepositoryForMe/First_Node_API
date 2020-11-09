const router = require('express').Router();
const User = require('../model/User');
const mongoose = require('mongoose');

router.post('/register', async (req, res) => 
{ 
    console.log("Start Data process");
    console.log(req.body);
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    console.log("Data bind with Model");
    //res.send(user);

    try{
        console.log("Start Save");
        //console.log(mongoose.connection.readyState);
        const savedUser = await user.save();
        res.send(savedUser);
        console.log("End Save");
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;