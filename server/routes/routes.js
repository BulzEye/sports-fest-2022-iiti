const router = require('express').Router();
const Events = require('../models').eventModel;
const Partners = require('../models').partnerModel;
const Sponsors = require('../models').sponsorModel;

//route handlers
//Request on Home Page
router.get("/home", async (req, res, next) => {
    let response = {};
    await Events.find({})
        .sort({ _id: 'desc' })
        .then(events => {
            response['events'] = events;
        })
        .catch(next);

    await Partners.find({})
        .sort({ _id: 'desc' })
        .then(partners => {
            response['partners'] = partners;
        })
        .catch(next);

    await Sponsors.find({})
        .sort({ _id: 'desc' })
        .then(sponsors => {
            response['sponsors'] = sponsors;
        })
        .catch(next);

    res.status(200).send(response);
})

// //Individual Event Request
// router.get('/event/:id', (req, res, next) => {
//     Events.findById(req.params.id)
//         .then(event => {
//             res.status(200).send(event);
//         })
//         .catch(next);
// });

// //Sponsor List Request
// router.get("/sponsors", (req, res, next) => {
//     Sponsors.find({})
//         .sort({ _id: 'desc' })
//         .then(sponsors => {
//             res.status(200).send(sponsors);
//         })
//         .catch(next);
// })

// //Partners List Request
// router.get("/partners", (req, res, next) => {
//     Partners.find({})
//         .sort({ _id: 'desc' })
//         .then(partners => {
//             res.status(200).send(partners);
//         })
//         .catch(next);
// })

module.exports = router;