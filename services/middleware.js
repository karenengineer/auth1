const User = require('./../models/user');
const UserValidator = require('./../services/validators/user_validator');
const Utility = require('./../services/utility');

class middleware {
    static _auth(permission) {
        return async  (req, res, next) => {

            let users = await User
                .query()
                .findById(req.params.id);
            
            if (users.role === permission) {
                return next();
            }
            else
                return res.send("permission denied");
        }
    }

    static validateinputdata(req, res, next) {
        if (req.body.username) {
            let uv_response = UserValidator.validateUsername(req.body.username);
            if (uv_response != Utility.ErrorTypes.SUCCESS) {
                return res.send(Utility.generateErrorMessage(uv_response));
            }
        }
        if (req.body.password) {
            let pass_response = UserValidator.validatePassword(req.body.password);
            if (pass_response != Utility.ErrorTypes.SUCCESS) {
                return res.send(Utility.generateErrorMessage(pass_response));
            }
        }

        if (req.body.email) {
            let email_response = UserValidator.validateEmail(req.body.email);
            if (email_response != Utility.ErrorTypes.SUCCESS) {
                return res.send(Utility.generateErrorMessage(email_response))
            }
        }
        next();
    }

}

module.exports = middleware;
