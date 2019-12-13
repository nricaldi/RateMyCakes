console.log("mongoose.js is running");

const mongoose = require("mongoose");

module.exports = (db_name => {
    mongoose.connect(`mongodb://localhost/${db_name}`);
    require("../models/cake");
    require("../models/review");
})