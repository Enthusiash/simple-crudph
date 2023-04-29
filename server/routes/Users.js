const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Users = require("../models/Users");

router.post("/register", async (req, res) => {
    const { fullname, gender, position, username } = req.body;
    const role = "user";
    const isActive = "true";
    const password = bcrypt.hashSync(req.body.password, 10);

    let user = await Users.findOne({ username });
    if (user) {
        return res.status(400).send("Username already taken");
    }
    user = new Users({fullname, gender, position, username, password, role, isActive });
    await user.save();

    const jwtdata = { username: user.username, position: user.position };
    const token = jwt.sign(jwtdata, process.env.JWT_CODE, { expiresIn: "5m" });
    res.send(token);
})

//     router.get("/view", async (req, res) => {
//     Users.find()
//     .then((items) => res.json(items))
//     .catch((err) => res.status(400).json("error:" + err ))
// });

module.exports = router;