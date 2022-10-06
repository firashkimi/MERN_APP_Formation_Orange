
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
let departSchema = new Schema(
    {
        code: Number,
        nom: String
    }, { versionKey: false });

let Depart = mongoose.model("departements", departSchema);


module.exports = Depart;