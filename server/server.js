require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .catch(err => {
        console.log(err.message)
    });

app.use(express.json());
app.use('/api', require('./routes'));

// if (process.env.NODE_ENV === 'production') {
app.use('/', express.static(__dirname + '../frontend/'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'..','frontend','hi.txt'));
})
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})