const express = require("express");
const path = require("path");
const db = require("../models/index");

const router = express.Router();

//Render index with all burgers in DB
router.get("/", (req, res) => {
    db.Burger.findAll({}).then((data) => {
        const allBurgers = {
            burgers: data
        }

        res.render("index", allBurgers);
    });
});

router.get("/api/burgers", (req, res) => {
    res.send();
});


module.exports = router;