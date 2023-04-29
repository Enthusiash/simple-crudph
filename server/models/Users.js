const mongoose = require('mongoose');
mongoose.pluralize(null);

const userSchema = new mongoose.Schema({   
        fullname: { type: String, required: true },
        gender: { type: String, required: true },
        position: { type: String, required: true },
        username: { type: String, required: true },
        password:{ type: String, required: true },
        role: { type: String, required: true },
        isActive: { type: Boolean, required: true }
});
module.exports = mongoose.model("users", userSchema);
