const express = require("express");
const path = require("path");

const router = express.Router();

//Render index with all burgers in DB
router.get("/", (req, res) => {
    Burger.all((data) => {
        const allBurgers = {
            burgers: data
        }

        res.render("index", allBurgers);
    });
});

router.get("/api/burgers", (req, res) => {

});


module.exports = router;