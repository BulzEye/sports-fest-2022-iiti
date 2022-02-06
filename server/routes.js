const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//route handlers
router.get('/events', (req, res, next) => {
    res.status(200).end();
});

module.exports = router;