const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');
const knex = Knex(knexConfig);
const User = require('./models/user');
const UserValidator = require('./services/validators/user_validator');
const Utility = require('./services/utility');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

Model.knex(knex); 

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(expressSession({ secret: 'max', saveUninitialized: false, resave: false }));
require('./authorization')(app);

const api = require('./controller/routers');
api.initialize(app);

app.listen(3341, () => {
    console.log('Server running on 3341');
});
module.exports = app;