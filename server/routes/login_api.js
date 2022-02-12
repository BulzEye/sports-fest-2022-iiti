const route = require('express').Router();
const { OAuth2Client } = require('google-auth-library');
const User = require('../models').userModel;
const genToken = require('../config/auth').genToken;

const client = new OAuth2Client("1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com");

route.post('/', (req, res, next) => {
    const { googleToken } = req.body;

    client.verifyIdToken({ idToken: googleToken, audience: "1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com" })
        .then(res => {
            const { email_verified, email } = res.payload;
            if (email_verified) {
                User.findOne({ email })
                    .then((user) => {
                        if (user) {
                            res.status(200).send(genToken({ email: user.email }));
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