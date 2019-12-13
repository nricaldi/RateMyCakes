console.log("cake.js is running");

const mongoose = require("mongoose");
const reviewSchema = require("./review")

const cakeSchema = new mongoose.Schema({
    bakerName: {
        type: String,
        required: [true, "Baker name is required"],
        minLength: [3, "Baker name must be at least 3 characters long"]
    },
    imageURL: {
        type: String,
        required: [true, "Image url is required"],
        minLength: [15, "Invalid URL"]
    },
    reviews: [reviewSchema]

}, {timestamps: true});

mongoose.model("Cake", cakeSchema);