import { User, Customer, CustomerInvite } from '../../../models';
import {
    APPROVED,
    CUSTOMER_ENUM,
    PENDING,
    SEND_REMINDERS_FIELDS
} from './../../configs/messages';

export class UserService {

    constructor() { } 

    static getUserByUsername(username) {
        return User
        .query()
        .where('username', username)
        .first();
    }
    static getUserById(id) {
        return User
        .query()
        .findById(id);
    }
    static registerUser() {
        return User
        .query()
        .insert();
    }
    static updateUser(id) {
        return User
        .query()
        .patchAndFetchById(id,{user});
    }
    static deleteUser(id) {
        return User
        .query()
        .skipUndefined()
        .deleteById(id);
    }
}
