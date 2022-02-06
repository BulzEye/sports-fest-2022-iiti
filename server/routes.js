const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//route handlers
router.get("/", (req, res, next) => {
    res.end();
})

router.get('/events', (req, res, next) => {
    res.status(200).end();
});




router.get("/events", (req, res, next) => {
    res.end();
})



router.get("/sponsors", (req, res, next) => {
    res.end();
})



router.get("/partners", (req, res, next) => {
    res.end();
})

module.exports = router;