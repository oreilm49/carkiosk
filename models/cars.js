const model = require('../db/db');
const csv = require('csvtojson');
const csvFilePath = '../carzone-agnelli.csv';


let saveCar = (data, cb) => {

    data.forEach((car, i)=> {
        let dbcar = new model.carModel(car);
        let counter = 0;
       dbcar.save(car, (err, result)=> {
            if(err) {
                cb(err)
            }
            counter++;
            if(counter === data.length) {
                cb(result)
            }
        })
    });
};


// csv()
//     .fromFile('../carzone-agnelli.csv')
//     .then((jsonObj)=>{
//         saveCar(jsonObj, (result)=>{console.log(result)});
//     });

module.exports = {
    saveCar
};
