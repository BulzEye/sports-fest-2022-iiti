const router = require('express').Router();
const Admins = require('../models').adminModel;
const Events = require('../models').eventModel;
const Partners = require('../models').partnerModel;
const Sponsors = require('../models').sponsorModel;


//route handlers
//site management
//Post Requests
router.post('/partner', (req, res, next) => {
    if (req.admin) {
        Partners.create(req.body)
            .then(() => {
                Partners.find({})
                    .sort({ _id: 'desc' })
                    .then(partners => {
                        res.status(200).send(partners)
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end()
});

router.post('/sponsor', (req, res, next) => {
    if (req.admin) {
        Sponsors.create(req.body)
            .then(() => {
                Sponsors.find({})
                    .sort({ _id: 'desc' })
                    .then(sponsors => {
                        res.status(200).send(sponsors)
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end()
});

router.post('/event', (req, res, next) => {
    if (req.admin) {

    }
    else res.status(403).end()
});

//Delete Requests
router.delete('/partner/:id', (req, res, next) => {
    if (req.admin) {
        Partners.deleteOne({ _id: req.params.id })
            .then(() => {
                Partners.find({})
                    .sort({ _id: 'desc' })
                    .then(partners => {
                        res.status(200).send(partners)
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end()
});

router.delete('/sponsor/:id', (req, res, next) => {
    if (req.admin) {
        Sponsors.deleteOne({ _id: req.params.id })
            .then(() => {
                Sponsors.find({})
                    .sort({ _id: 'desc' })
                    .then(sponsors => {
                        res.status(200).send(sponsors)
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end()
});

router.delete('/event/:id', (req, res, next) => {
    if (req.admin) {
        Events.deleteOne({ _id: req.params.id })
            .then(() => {
                Events.find({})
                    .sort({ _id: 'desc' })
                    .then(events => {
                        res.status(200).send(events)
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end()
});



//Admin management
router.get('/admin', (req, res, next) => {
    if (req.superAdmin) {
        Admins.find({})
            .sort({ _id: 'desc' })
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
                Admins.find({})
                    .sort({ _id: 'desc' })
                    .then(admins => {
                        res.status(201).send(admins);
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end();
});

router.delete('/admin/:id', (req, res, next) => {
    if (req.superAdmin) {
        Admins.deleteOne({ _id: req.params.id })
            .then(() => {
                Admins.find({})
                    .sort({ _id: 'desc' })
                    .then(admins => {
                        console.log(admins)
                        res.status(200).send(admins);
                    })
            })
            .catch(next)
    }
    else res.status(403).end();
});

module.exports = router;