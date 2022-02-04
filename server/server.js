require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .catch(err => {
        console.log(err.message)
    });

app.use(express.json());
app.use('/api', require('./routes'));

// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static(__dirname + '/client/build/'))
// }
