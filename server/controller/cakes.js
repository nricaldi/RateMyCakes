console.log("cakes.js is running")
const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Review = mongoose.model("Review");

class CakeController {
    getAll(req, res) {
        Cake.find({})
            .then(allCakes => res.json(allCakes))
            .catch(err => res.json(err));
    }

    createCake(req, res){
        Cake.create(req.body)
            .then(() => res.json({"message": "Cake created"}))
            .catch(err => res.json(err));
    }

    getOne(req, res){
        Cake.findById(req.params._id)
            .then(cake => res.json(cake))
            .catch(err => res.json(err));
    }
    
    createReview(req, res){
        // Review.create(req.body)
        //     .then(newReview => {
        //         Cake.findByIdAndUpdate({_id: req.params.id}, {$push: {reviews: newReview}}, {runValidators: true})
        //             .then(() => res.json({"message": "review created"}))
        //             .catch(err => res.json(err));
        //     })
        //     .catch(err => res.json(err));


        let _id = req.params._id;
        let review = new Review(req.body);
        Cake.findByIdAndUpdate({_id}, {$push: {reviews: review}}, {runValidators: true})
            .then(() => res.json({'msg': 'Review Created'}))
            .catch(err => res.json(err));
    }

}

module.exports = new CakeController();