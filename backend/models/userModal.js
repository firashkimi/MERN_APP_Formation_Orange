
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
let userSchema = new Schema(
    {
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true }
    }, { versionKey: false });

userSchema.plugin(uniqueValidator)

let User = mongoose.model("users", userSchema);


module.exports = User;