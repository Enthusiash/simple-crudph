const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post('/', async (req, res) => {
    const {username} = req.body;
    let validpass = false;
    await Users.findOne({username})
    .then ((res)=> {
        validpass = bcrypt.compareSync(req.body.password, res.password);
    })
    .catch((err) => {
        console.log(err);
    })

    if (validpass) {
        let user = await Users.findOne({username});
        if (!user) return res.status(400).send("Invalid Username!");
        const jwtdata = { username: user.username, position: user.position };
        const token = jwt.sign(jwtdata, process.env.JWT_CODE, { expiresIn: "5m" });
        res.send(token);
    }
    else {
        return res.status(400).send("Invalid Username or Password!");
    }
})

module.exports = router;