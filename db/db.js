const mongoose = require('mongoose');
const mLab = 'mongodb://carkiosk:carkiosk1@ds119802.mlab.com:19802/car-kiosk';

mongoose.connect(mLab);
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', dbCallback);

function dbCallback() {
    console.log('db callback called');
}

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const carSchema = new Schema({
    header1: String,
    header2: String,
    price: String,
    brand: String,
    model: String,
    engineSize: String,
    fuel: String,
    carType: String,
    transmission: String,
    color: String,
    year: String,
    mileage: String,
    kilometers: String,
    owners: String,
    doors: String,
    nct: String,
    image: String
});

const carModel = mongoose.model('car', carSchema);

module.exports = {
    carModel
};