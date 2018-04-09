const express = require('express');
const app = express();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Strategy = require('passport-jwt').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/user');
const Utility = require('./services/utility');

let  ET = Utility.ErrorTypes;

let secret = 'secretkey';


module.exports = app => {
    passport.serializeUser((User, done) => {
        done(null, User.id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await User
            .query()
            .skipUndefined()
            .findById(id);

        user ? done(null, user) : done((ET.USER_NOT_EXIST), null);
    });

    let jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret
    };

    let strategy = new Strategy(jwtOptions, async (payload, next) => {
        let user = await User
            .query()
            .skipUndefined()
            .findById(payload.id);
        if (user) {
            next(null, user);
        } else {
            next((ET.USER_NOT_EXIST), false);
        }
    });
    passport.use(strategy);
}