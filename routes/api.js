const express = require('express');
const router = express.Router();
const carModel = require('../models/cars');
const db = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Root API route');
});

router.get('/cars', (req, res, next) => {
    db.carModel.find({},(err,cars)=>{
        if(err){next(err)}
        res.send(cars);
    });
});

router.post('/', (req, res, next) => {
    res.send('home post route')
});

router.post('/cars/filter/', (req, res, next) => {

    let query = {};
    if(req.body.year !== ""){
        query["year"] = req.body.year
    }
    if(req.body.fuel !== ""){
        query["fuel"] = req.body.fuel
    }

    db.carModel.find(query, (err, cars)=> {
        // filter min price
        if(err){next(err)}
        res.send(cars);
    })
});

router.post('/cars/save', (req, res, next)=> {
    carModel.saveCar(req.body, (result)=> {
        res.send(result)
            .catch((err)=> {
                next(err);
            })
    })
});

module.exports = router;