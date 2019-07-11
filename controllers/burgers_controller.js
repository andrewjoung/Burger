var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarObject = {
            burgers:data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject);
    })
});

router.post("/api/cats", function(req, res) {
    burger.insertOne(["burger_name", "devoured"],[req.body.burgerName, req.body.devoured], function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }

        res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;