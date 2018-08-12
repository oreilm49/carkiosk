const express = require('express');
const router = express.Router();
const model = require('../db/db');

let reduceArray = function (array, dataItem) {
    if (array.indexOf(dataItem) <= -1) {
        array.push(dataItem)
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'layout' });
});

router.get('/menu', (req, res, next) => {
  res.render('menu', { title: 'Express', layout: 'nav-layout'});
});

router.get('/used', (req, res, next) => {
    let cars = [
        {
            "header-1": "ALFA ROMEO STELVIO Milano Edizione 2.2�",
            "header-2": "2018 (181) ALFA ROMEO STELVIO Milano Edizione 2.2 210HP AWD",
            "price": "59,995",
            "brand": "ALFA ROMEO",
            "model": "STELVIO",
            "engine-size": "2.2",
            "fuel": "Diesel",
            "car-type": "SUV",
            "transmission": "Automatic",
            "color": "Grey",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "5",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=f09ba8140dcd4adf82a59ec768199bff&width=640&height=480"
        },
        {
            "header-1": "AUDI A3 SB 1.6TDI 105 4DR",
            "header-2": "2012 AUDI A3 SB 1.6TDI 105 4DR",
            "price": "13,450",
            "brand": "AUDI",
            "model": "A3",
            "engine-size": "1.6",
            "fuel": "Diesel",
            "car-type": "Estate",
            "transmission": "Manual",
            "color": "Grey",
            "year": "2012",
            "mileage": "47845",
            "kilometers": "76999",
            "owners": "2",
            "doors": "5",
            "nct": "2018 May",
            "image": "https://ie-cs.atcdn.co.uk/images?id=d373593a731c4250ad7f14dd3b66476e&width=640&height=480"
        },
        {
            "header-1": "ALFA ROMEO STELVIO Milano Edizione 21�",
            "header-2": "2018 (181) ALFA ROMEO STELVIO Milano Edizione 210HP",
            "price": "59,995",
            "brand": "ALFA ROMEO",
            "model": "STELVIO",
            "engine-size": "2.2",
            "fuel": "Diesel",
            "car-type": "SUV",
            "transmission": "Automatic",
            "color": "Navy",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "5",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=675d29c1386942b09d09cd0f01d85001&width=640&height=480"
        },
        {
            "header-1": "AUDI A3 SB 1.6 TDI 110 SE 4DR",
            "header-2": "2014 (142) AUDI A3 SB 1.6 TDI 110 SE 4DR",
            "price": "14,950",
            "brand": "AUDI",
            "model": "A3",
            "engine-size": "1.6",
            "fuel": "Diesel",
            "car-type": "Hatchback",
            "transmission": "Manual",
            "color": "Red",
            "year": "2014",
            "mileage": "70,214",
            "kilometers": "112,998",
            "owners": "2",
            "doors": "5",
            "nct": "2018 July",
            "image": "https://ie-cs.atcdn.co.uk/images?id=56b87f864b184c4c962af588e753cebf&width=640&height=480"
        },
        {
            "header-1": "ALFA ROMEO STELVIO STELVIO 2.0 TURB�",
            "header-2": "2018 (181) ALFA ROMEO STELVIO STELVIO 2.0 TURBO 280HP AWD M",
            "price": "POA",
            "brand": "ALFA ROMEO",
            "model": "STELVIO",
            "engine-size": "2",
            "fuel": "Petrol",
            "car-type": "SUV",
            "transmission": "Automatic",
            "color": "Black",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "5",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=28c6a928e7cb441692b817893833ef53&width=640&height=480"
        },
        {
            "header-1": "ALFA ROMEO GIULIA SUPER 2.2 150HP",
            "header-2": "2018 (181) ALFA ROMEO GIULIA SUPER 2.2 150HP",
            "price": "43,545",
            "brand": "ALFA ROMEO",
            "model": "GIULIA",
            "engine-size": "2",
            "fuel": "Diesel",
            "car-type": "Coupe",
            "transmission": "Automatic",
            "color": "White",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "4",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=d718a3bca63848789fa32d0f826cc400&width=640&height=480"
        },
        {
            "header-1": "ALFA ROMEO GIULIA Super Sport  200 bhp",
            "header-2": "2018 (181) ALFA ROMEO GIULIA Super Sport 200 bhp",
            "price": "46,945",
            "brand": "ALFA ROMEO",
            "model": "GIULIA",
            "engine-size": "2",
            "fuel": "Petrol",
            "car-type": "Saloon",
            "transmission": "Automatic",
            "color": "Black",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "4",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=b1b3ad17ecd84a448b5efd4bb41ca988&width=640&height=480"
        },
        {
            "header-1": "ALFA ROMEO MITO SUPER SPORT",
            "header-2": "2018 (181) ALFA ROMEO MITO SUPER SPORT",
            "price": "23,300",
            "brand": "ALFA ROMEO",
            "model": "MITO",
            "engine-size": "1.3",
            "fuel": "Diesel",
            "car-type": "Hatchback",
            "transmission": "Manual",
            "color": "Black",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=6c9e1855c0844b3babb2f270f23ec282&width=640&height=480"
        },
        {
            "header-1": "ALFA ROMEO GIULIA Super Lux 200HP",
            "header-2": "2018 (181) ALFA ROMEO GIULIA Super Lux 200HP",
            "price": "44,845",
            "brand": "ALFA ROMEO",
            "model": "GIULIA",
            "engine-size": "2",
            "fuel": "Petrol",
            "car-type": "Saloon",
            "transmission": "Automatic",
            "color": "Alfa Red",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "4",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=cf44ed168cee48719f29437d554368f6&width=640&height=480"
        },
        {
            "header-1": "ALFA ROMEO GIULIETTA 1.4 140HP",
            "header-2": "2018 (181) ALFA ROMEO GIULIETTA 1.4 140HP",
            "price": "28,950",
            "brand": "ALFA ROMEO",
            "model": "GIULIETTA",
            "engine-size": "1.4",
            "fuel": "Petrol",
            "car-type": "Hatchback",
            "transmission": "Manual",
            "color": "Alfa White",
            "year": "2018",
            "mileage": "621",
            "kilometers": "999",
            "owners": "1",
            "doors": "5",
            "nct": "",
            "image": "https://ie-cs.atcdn.co.uk/images?id=d22cc0bc4fee4ad79549cc2b75d04ab0&width=640&height=480"
        }
    ];
    let years = [];
    let fuelType = [];
    let price = [];
    let mileage = [];
    let counter = 0;
    cars.forEach((car)=>{
        reduceArray(years, car.year);
        reduceArray(fuelType, car.fuel);
        reduceArray(price, car.price);
        reduceArray(mileage, car.kilometers);
        counter++;
        if(counter === cars.length) {
            res.render('used',
                { title: 'Express',
                    layout: 'nav-layout',
                    years: years,
                    fuelType: fuelType,
                    minPrice: Math.min.apply(null,price),
                    maxPrice: Math.max.apply(null,price),
                    mileageMin: Math.min.apply(null,mileage),
                    mileageMax: Math.max.apply(null,mileage),
                });
        }
    });

});

router.get('/car/:id', (req, res, next) => {
    model.carModel.find({'_id':req.params.id},
        (err, result) => {
            if(err) {next(err)}
            res.render('car',{
                layout: 'nav-layout',
                image: result[0].image,
                header1: result[0].header1,
                price: result[0].price,
                brand: result[0].brand,
                model: result[0].model,
                engine: result[0].engineSize,
                fuel: result[0].fuel,
                carType: result[0].carType,
                transmission: result[0].transmission,
                color: result[0].color,
                year: result[0].year,
                mileage: result[0].mileage,
                kilometers: result[0].kilometers,
                owners: result[0].owners,
                doors: result[0].doors
            })
        })
});

module.exports = router;
