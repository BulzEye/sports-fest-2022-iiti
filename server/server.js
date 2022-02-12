require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const authToken = require('./config/auth').authToken;


//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .catch(err => {
        console.log(err.message)
    });


//CORS, Parsers and Routing Modules
app.use(require('cors')());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/routes'));
app.use('/api/login', require('./routes/login_api'));
app.use('/api/auth', authToken, require('./routes/auth_routes'));


//Serving static files
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(__dirname + '../frontend/'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
    })
}

//Error Handling
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("Something went wrong...");
})

//Listening to requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})