const AppConstants = require('./../constants');
const ErrorTypes = {
    SUCCESS: 'success',
    VALIDATION_ERROR: 'validation_error',
    USERNAME_EMPTY: 'username line is empty',
    USER_NOT_EXIST: 'user not exist',
    PASSWORD_EMPTY: 'empty_password',
    NAME_EMPTY: 'name line is empty',
    EMAIL_EMPTY: 'email line is empty',
    INVALID_EMAIL: 'invalid_email',
    INVALID_TYPE: 'invalid_type',
    INVALID_USERNAME_RANGE: 'invalid_username_range',
    INVALID_PASSWORD_RANGE: 'invalid_password_range',
    USER_CREATION_ERROR: 'user_creation_error',
    PERMISSION_DENIED: 'permission_denied',
    USER_DELETE_ERROR: 'deleting_error',
    USER_UPDATE_ERROR: 'updating_error',
    ID_ERROR: 'id error',
};

class Utility {
    static generateErrorMessage(type, options) {
        options = options || {};
        let error_object = {
            type: type || ErrorTypes.UNKNOWN_ERROR,
            message: 'Something went wrong..'
        };
        switch (type) {
            case ErrorTypes.USER_NOT_EXIST:
                error_object.message = 'user not exist';
                break;
            case ErrorTypes.USERNAME_EMPTY:
                error_object.message = 'please enter your username';
                break;
            case ErrorTypes.NAME_EMPTY:
                error_object.message = 'please enter your name';
                break;
            case ErrorTypes.EMAIL_EMPTY:
                error_object.message = 'please enter your email';
                break;
            case ErrorTypes.INVALID_USERNAME_RANGE:
                error_object.message = 'invalid username range';
                break;
            case ErrorTypes.INVALID_EMAIL:
                error_object.message = 'invalid email';
                break;
            case ErrorTypes.PASSWORD_EMPTY:
                error_object.message = 'please enter your password';
                break;
            case ErrorTypes.ID_ERROR:
                error_object.message = 'id not found.';
                break;
            case ErrorTypes.INVALID_TYPE:
                error_object.message = 'Invalid TYPE';
                break;
            case ErrorTypes.INVALID_PASSWORD_RANGE:
                error_object.message = 'please add correct password';
                break;
            case ErrorTypes.USER_CREATION_ERROR:
                error_object.message = 'Failed to create a user.';
                break;
            case ErrorTypes.USER_DELETE_ERROR:
                error_object.message = 'this user not removed.';
                break;
            case ErrorTypes.PERMISSION_DENIED:
                error_object.message = 'you must be registered.';
                break;
        }
        return error_object;
    }
}
module.exports = Utility;
module.exports.ErrorTypes = ErrorTypes;