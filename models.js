const mongoose = require('mongoose');

//Schemas
const eventSchema = new mongoose.Schema({
    title: String,
    image: String,
    schedule: String,
    form: String,
    description: String,
    format: String,
    registrationStart: String,
    registrationDeadline: String,
    duration: String,
    prizePool: String,
    fixtures: String
});

const sponsor_partner_Schema = new mongoose.Schema({
    title: String,
    image: String,
    type: String,
    description: String,
    website: String
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