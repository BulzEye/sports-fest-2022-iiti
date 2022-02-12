const router = require('express').Router();
const Admins = require('../models').adminModel;
const Events = require('../models').eventModel;
const Partners = require('../models').partnerModel;
const Sponsors = require('../models').sponsorModel;


//route handlers
//site management
router.post('/partner', (req, res, next) => {
    if (req.admin) {

    }
    else res.status(403).end()
});

router.post('/sponsor', (req, res, next) => {
    if (req.admin) {

    }
    else res.status(403).end()
});

router.post('/event', (req, res, next) => {
    if (req.admin) {

    }
    else res.status(403).end()
});

router.delete('/partner/:id', (req, res, next) => {
    if (req.admin) {

    }
    else res.status(403).end()
});

router.delete('/sponsor/:id', (req, res, next) => {
    if (req.admin) {

    }
    else res.status(403).end()
});

router.delete('/event/:id', (req, res, next) => {
    if (req.admin) {

    }
    else res.status(403).end()
});



//Admin management
router.get('/admin', (req, res, next) => {
    if (req.superAdmin) {
        Admins.find({})
            .then(admins => {
                res.status(200).send(admins)
            })
            .catch(next)
    }
    else res.status(403).end();
});

router.post('/admin', (req, res, next) => {
    if (req.superAdmin) {
        Admins.create(req.body)
            .then(() => {
                res.status(201).end();
            })
            .catch(next)
    }
    else res.status(403).end();
});

router.delete('/admin/:email', (req, res, next) => {
    if (req.superAdmin) {
        Admins.deleteOne({ email: req.params.email })
            .then(() => {
                res.status(204).end();
            })
            .catch(next)
    }
    else res.status(403).end();
});

module.exports = router;