const express = require('express');
const cors = require('cors');
require("dotenv").config();
require ("./db/Connectdb")

const App = express();
const Port = process.env.PORT;

// IMPORT ROUTES HERE
const userRoutes = require ('./routes/Users');
const authRoutes = require('./routes/Auth');

App.use(express.json());
App.use(cors());

// DEFINING ROUTES
App.use("/api/users", userRoutes);
App.use("/api/auth", authRoutes);

App.listen(Port,() => {
    console.log("Server is running on port " + Port);
});