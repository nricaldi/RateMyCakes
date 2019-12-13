console.log("routes.js is running");

const Cakes = require("../controller/cakes");

module.exports = app => {
    app.get('/cakes', Cakes.getAll);
    app.post('/cakes', Cakes.createCake);
    app.get('/cakes/:_id', Cakes.getOne);
    app.post('/reviews/:_id', Cakes.createReview);
}
