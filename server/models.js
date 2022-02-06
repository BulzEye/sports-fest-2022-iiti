const mongoose = require('mongoose');

//Schemas
const eventSchema = new mongoose.Schema({
    title: String,
    images: [String],
    schedule: String,           //saving file to DB
    form: String,
    description: String,
    format: [String]
});

const sponsorSchema = new mongoose.Schema({
    title: String,
    image: String,
    type: String,
    description: String
});

const partnerSchema = new mongoose.Schema({
    title: String,
    image: String,
    type: String,
    description: String
})

//Models
const eventModel = mongoose.model('events', eventSchema);
const sponsorModel = mongoose.model('sponsors', sponsorSchema);
const partnerModel = mongoose.model('partners', partnerSchema);

module.exports = {
    eventModel,
    sponsorModel,
    partnerModel
}