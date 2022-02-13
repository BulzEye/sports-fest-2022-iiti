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

const sponsor_partner_Schema = new mongoose.Schema({
    title: String,
    image: String,
    type: String,
    description: String
});
const adminSchema = new mongoose.Schema({
    username: String,
    email: String
})

//Models
const eventModel = mongoose.model('events', eventSchema);
const sponsorModel = mongoose.model('sponsors', sponsor_partner_Schema);
const partnerModel = mongoose.model('partners', sponsor_partner_Schema);
const adminModel = mongoose.model('admins', adminSchema);

module.exports = {
    eventModel,
    sponsorModel,
    partnerModel,
    adminModel
}