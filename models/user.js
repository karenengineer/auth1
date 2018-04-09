'use strict';
const Model = require('objection').Model;
const AppConstants = require('./../constants');

class user extends Model {
    
    static get tableName() {
        return 'user';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username', 'password', 'email', 'name','image'],

            properties: {
               
                id: { type: 'integer' },
                username: {type: 'string',
                    unique: true ,
                    minlength: AppConstants.USERNAME_MIN_LENGTH,
                    maxlength: AppConstants.USERNAME_MAX_LENGTH
                },

                password: {
                    type: 'string', 
                    minlength: AppConstants.PASSWORD_MIN_LENGTH,
                    maxlength: AppConstants.PASSWORD_MAX_LENGTH
                },
                email: { type: 'string',
                    index: { unique: true },
                },
                name: { type: 'string',
                    minlength: AppConstants.USERNAME_MIN_LENGTH,
                    maxlength: AppConstants.USERNAME_MAX_LENGTH
                },
                role: { 
                    type: 'string',
                    enum: ['admin', 'user'], 
                    default: 'user'
                },
                image: {type:'string'},
                // confirmed: {
                //     type: 'boolean',
                //     default: false,
                // }
                }
        };
    }
}

module.exports = user;
