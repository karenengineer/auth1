import crypto from 'crypto';
import { Model, ValidationError } from 'objection';
import {
    EMAIL_MAX_LENGTH,
    NAME_MAX_LENGTH,
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    UNIQUE
} from './../app/configs/messages';
export class User extends Model {
    
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
                    maxlength: USERNAME_MAX_LENGTH
                },

                password: {
                    type: 'string', 
                    minlength: PASSWORD_MIN_LENGTH,
                    maxlength: PASSWORD_MAX_LENGTH
                },
                email: { type: 'string',
                    index: { unique: true },
                },
                name: { type: 'string',
                    maxlength: USERNAME_MAX_LENGTH
                },
                role: { 
                    type: 'string',
                    enum: ['admin', 'user'], 
                    default: 'user'
                },
                image: {type:'string'},
                // active: {
                //     type: 'boolean',
                //     default: false,
                // }
                }
        };
    }

    constructor() {
        super();
    }

    hashPassword() {
        this. password = crypto
            .createHash('sha1')
            .update(this.password + 'salt')
            .digest('hex');
    }

    validatePassword(dbPass) {
        return compareSync(dbPass, this.password);
    }

    $beforeInsert() {
        this.hashPassword();

        return UserService.getUserByUsername(this.username)
            .then((dbUser) => {
                if (dbUser && dbUser.length > 0) {
                    throw new ValidationError({ username: UNIQUE('Username') });
                }

                return dbUser;
            });
    }

    $beforeUpdate(opt) {
        if (this.password) {
            this.hashPassword();
        }

        if (this.username && this.username !== opt.old.username) {
            return UserService.getUserByUsername(this.username)
                .then(dbUser => {
                    if (dbUser) {
                        throw new ValidationError({ username: UNIQUE('Username') });
                    }
                    return dbUser;
                });
        }
         
    }

    getFields() {
        return [
            'username',
            'password',
            'email',
            'name',
            'image',
            'role',
            // 'active',
            'id',
        ];
    }
}

