const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("x-oauth-token");
    if (!token) return res.status(401).send("Access Denied Token Not Found");

    try {
        const user = jwt.verify(token, process.env.JWT_CODE);
        req.user = user;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
};