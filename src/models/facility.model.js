const mongoose = require("mongoose");
const {Schema, model, Types} = mongoose;


const facilitySchema = new Schema({
    title: String,
    icon: String,
})


module.exports = model("Facilities", facilitySchema);