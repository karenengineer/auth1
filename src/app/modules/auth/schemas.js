import { REQUIRED } from '../../configs/messages';

export default {
    register: {
        validation: {
            'username': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Username')
                }
            },
            'password': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Password')
                }
            },
            'email': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('email')
                }
            },
            'name': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('name')
                }
            },
            'role': {
                in: 'body',
            },
            'image': {
                in: 'body',
            }
        }
    },
    login: {
        validation: {
            'username': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Username')
                }
            },
            'password': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Password')
                }
            }
        }
    },
    update: {
        validation: {
            'username': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Username')
                }
            },
            'password': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Password')
                }
            },
            'email': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('email')
                }
            },
            'name': {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('name')
                }
            },
            'role': {
                in: 'body',
            },
            'image': {
                in: 'body',
            }
        }
    },
};
