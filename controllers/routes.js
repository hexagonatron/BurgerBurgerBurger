const express = require("express");
const path = require("path");
const db = require("../models/index");

const router = express.Router();

router.use(express.urlencoded({extended: true}));

//Render index with all burgers in DB
router.get("/", (req, res) => {
    db.Burger.findAll({}).then((data) => {
        const allBurgers = {
            burgers: data
        }
        allBurgers.burgers.map(burger => console.log(burger.dataValues));
        // console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

router.get("/api/burgers", (req, res) => {
    res.send();
});

router.post("/api/burger", (req, res) => {
    const {body} = req;
    console.log(body);

    db.Burger.create({
        name: body.name
    }).then(data => {

        console.log(data);
        res.redirect("/");
    }).catch(err => {
        res.send(err);
    })

})

router.post("/api/devour/:id", (req, res) => {
    const burgerID = req.params.id;

    db.Burger.update({devoured: true}, {where: {id: burgerID}}).then(data => {
        console.log(data);

        res.redirect("/");
    })
})

module.exports = router;