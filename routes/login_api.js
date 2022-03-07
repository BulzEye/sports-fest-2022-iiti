const route = require('express').Router();
const { OAuth2Client } = require('google-auth-library');
const Admin = require('../models').adminModel;
const genToken = require('../config/auth').genToken;

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

route.post('/', (req, res, next) => {
    const { googleToken } = req.body;

    client.verifyIdToken({ idToken: googleToken, audience: process.env.GOOGLE_CLIENT_ID })
        .then(googleResponse => {
            const { email_verified, email } = googleResponse.payload;
            if (email_verified) {
                Admin.findOne({ email })
                    .then(admin => {
                        if (admin || email === process.env.SUPER_ADMIN) {
                            res.status(200).send(genToken({ email: email }));
                        } else {
                            res.status(403).end();
                        }
                    })
                    .catch(next);
            }
            else {
                res.status(403).end();
            }
        })
        .catch(next);
});

module.exports = route;