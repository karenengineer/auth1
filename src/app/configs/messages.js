import moment from 'moment';

export const REMINDERS_CRONTIME = '0 10 * * *';

export const REFRESH_TOKEN_VALIDITY_SECONDS = 30 * 24 * 60 * 60; // 30 days
export const REFRESH_TOKEN_COOKIE_CONFIG = {
    path: '/',
    expires: moment().add(REFRESH_TOKEN_VALIDITY_SECONDS, 'seconds')
        .toDate(),
    httpOnly: true
};

export const SEND_REMINDERS_FIELDS = [
    'name',
    'username',
    'email',
    'password'
];

export const FAILED = 'FAILED';
export const NEW = 'NEW';
export const PASSED = 'PASSED';
export const PENDING = 'PENDING';
export const VERIFIED = 'VERIFIED';
export const APPROVED = 'APPROVED';
export const DECLINED = 'DECLINED';
export const VERIFIED_WITH_CHANGES = 'VERIFIED_WITH_CHANGES';
export const VERIFIED_ADMIN = 'VERIFIED_ADMIN';

export const CURRENCY = 'AUD';
export const VERIFICATION_RESULTS = [
    FAILED,
    PENDING,
    VERIFIED,
    VERIFIED_WITH_CHANGES,
    VERIFIED_ADMIN
];
export const ID_VERIFIED_STATUSES = [
    VERIFIED,
    VERIFIED_WITH_CHANGES,
    VERIFIED_ADMIN
];

export const EMAIL = 'info@holipay.com.au';

export const NOT_AUTHORIZED = 'User is not authorized';

export const ACTIVATION_REASON = 'activation';

export const PASSWORD_MIN_LENGTH = 8;

export const MAIL_REMINDER_LEFT_COUNT = 3;

export const PASSWORD_MAX_LENGTH = 64;

export const VERIFY_CODE_LENGTH = 6;

export const NAME_MAX_LENGTH = 32;

export const MAIL_TOKEN_LENGTH = 20;

export const VERIFICATION_ID_MAX_LENGTH = 45;

export const EMAIL_MAX_LENGTH = 64;

export const MIN_LENGTH = 1;

export const ACCEPT = 'ACCEPT';

export const DECLINE = 'DECLINE';

export const BASIC_AUTH = 'basic';

export const BEARER_AUTH = 'bearer';

export const CREDENTIALS_NOT_MATCHING = 'Authentication failed. Credentials do not match.';

export const USER_NOT_EXIST = 'The username or password you entered is incorrect. Please try again.';

export const SUCCESSFULLY_AUTHORIZED = 'You are successfully authorized.';

export const SOMETHING_WENT_WRONG = 'Something went wrong. Try again.';

export const ALREADY_SIGNED_OUT = `You're signed out, to perform this action sign in again.`;

export const INVALID_REFRESH_TOKEN = 'Refresh token is not valid.';

export const USER_ADDED = 'User successfully added.';

export const VALIDATION_ERROR = `Request didn't pass validation.`;

export const PERMISSION_DENIED = 'Permission Denied.';

export const REQUIRED = resource => `${resource} is required!`;

export const UPDATED = resource => `${resource} is updated.`;

export const UNIQUE = resource => `${resource} must be unique!`;

export const VALID_LENGTH = (resource, oprtions) => `${resource} must contain ${oprtions} characters!`;

export const INVALID = (resource) => `${resource} is invalid.`;

export const ONLY_ALPHA_NUMERIC = resource => `${resource} must contain only alphabetic and numeric characters!`;

export const NOT_EXISTS = resource => `${resource} doesn't exist!`;

export const LENGTH_REQUIRED = (resource, options) => {
    const { min, max } = options;
    if (min && max) {
        return `${resource} must be at least ${min} and maximum ${max} characters!`;
    } else if (min) {
        return `${resource} must be at least ${min} characters!`;
    } else {
        return `${resource} must be maximum ${max} characters!`;
    }
};

export const INVALID_PASSWORD = 'Password must contain at least one character and one number!';

export const VERIFICATION_SEND = 'Verification code was sent to your email';

export const EMAIL_SENDING_ERROR = 'There was an error while sending the message.';

export const INVALID_MAIL_TOKEN = 'Your token is invalid.';

export const EXPIRED_MAIL_TOKEN = 'Expired token date.';

export const TOKEN_REMOVE_ERROR = 'There was an error while removing the token.';

export const INVALID_ID_VERIFICATION_MESSAGE = 'Please check that your details are correct and try again.';

