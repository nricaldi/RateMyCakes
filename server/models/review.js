console.log("review.js is running");

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    content: {
        type: String,
        required: [true, "Review is required"],
        minlength: [2, "Review must be at least 2 characters long"]
    }
 }, {timestamps: true});

mongoose.model("Review", reviewSchema);
module.exports = reviewSchema;  