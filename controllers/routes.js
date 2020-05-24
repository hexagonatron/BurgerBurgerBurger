const express = require("express");
const path = require("path");
const db = require("../models/index");

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

const extractData = (data) => data.map(({ dataValues }) => dataValues);


//Render index with all burgers in DB
router.get("/", (req, res) => {
    db.Burger.findAll({where: {
        deleted: false
    }}).then((data) => {

        data = extractData(data);
        const allBurgers = {
            burgers: data,
            message: req.message
        }

        res.render("index", allBurgers);
    });
});

router.post("/api/burger", (req, res) => {
    const { body } = req;

    if(body.name.length > 100){
        req.message = {
            type: "warning",
            msg: "I'm sorry, your burger name is too long"
        }

        res.redirect("/");
        
    } else if(body.name.length == 0){
        req.message = {
            type: "warning",
            msg: "Please enter a burger name"
        }
        res.redirect("/");
    }

    db.Burger.create({
        name: body.name
    }).then(data => {
        req.message = {
            type: "success",
            msg: "Burger added"
        }
        res.redirect("/");
    }).catch(err => {
        req.message = {
            type: "danger",
            msg: err
        }
        res.redirect("/")
    })

})

router.post("/api/devour/:id", (req, res) => {
    const burgerID = req.params.id;

    db.Burger.update({ devoured: true }, { where: { id: burgerID } }).then(data => {
        req.message = {
            type: "success",
            msg: "Burger has been devoured"
        }
        res.redirect("/");
    })
});

router.get("/api/delete", (req, res) => {
    db.Burger.update({ deleted: true }, { where: {}}).then(result => {
        console.log(result);
        req.message = {
            type: "success",
            msg: "All burgers have been deleted"
        }
        res.redirect("/");
    })
})

module.exports = router;