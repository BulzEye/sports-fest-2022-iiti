const route = require('express').Router();
const { OAuth2Client } = require('google-auth-library');
const Admin = require('../models').adminModel;
const genToken = require('../config/auth').genToken;

const client = new OAuth2Client("1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com");

route.post('/', (req, res, next) => {
    const { googleToken } = req.body;

    client.verifyIdToken({ idToken: googleToken, audience: "1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com" })
        .then(googleResponse => {
            const { email_verified, email } = googleResponse.payload;
            if (email_verified) {
                Admin.findOne({ email })
                    .then(admin => {
                        if (admin) {
                            res.status(200).send(genToken({ email: admin.email }));
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