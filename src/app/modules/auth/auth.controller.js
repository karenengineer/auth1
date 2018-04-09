import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest, } from '../../errors';
import { MERCHANT_ENUM, REFRESH_TOKEN_COOKIE_CONFIG, USER_NOT_EXIST } from '../../configs/messages';
import { User } from './../../../models';
import { UserService } from '../../strategies/services';
import Utils from '../../helpers/utils';

export class AuthController {
    /**
     * Sign In User to the app.
     * 
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    // signup 
    static async signup(req, res, next) {
        const { username, password, email, name, role, image } = req.body;
        let user;
        try {
            // create user
            user = await UserService.registerUser();
            
            return res.status(SUCCESS_CODE).send({
                user: {
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    image: req.file.path
                }
            }); 
        }
        catch (err) {
            return next(err);
        }
    }
    // login
    static async login(req, res, next) {
        const { username, password } = req.body;
        let user;
            // Check  user 
        try {
            user = await UserService.getUserByUsername(username);

            // Check password
            if (!user || !(user instanceof User) || !user.validatePassword(password) || user.role === MERCHANT_ENUM) {
                return next(new BadRequest(USER_NOT_EXIST));
            }

            const tokenInfo = Utils.signJWTToken(user);
            res.cookie('refresh_token', tokenInfo.refreshToken, REFRESH_TOKEN_COOKIE_CONFIG);

            return res.status(SUCCESS_CODE).json({
                access_token: tokenInfo.token,
                refresh_token: tokenInfo.refreshToken,
                user: {
                    username: user.username,
                    password: user.password,
                    id: user.id
                }
            });
        }
        catch (err) {
            return next(err);
        } 
    }
    // update
    static async update(req, res, next) {
        const { username, password, email, name, role, image } = req.body;
        const { id } = req.query;
        let user;
        try {

            user = await UserService.getUserByUsername(username);

            if (!user || !(user instanceof User) || !user.validatePassword(password) || user.role === MERCHANT_ENUM) {
                return next(new BadRequest(USER_NOT_EXIST));
            }

            user =  UserService.updateUser(id, {
                username: req.body.username,
                password: passwordHashed,
                email: req.body.email,
                name: req.body.name,
                image: req.file.path,
                role: req.body.role
            });
                    
            return res.status(SUCCESS_CODE).send({ user });
        }
        catch (err) {
            return next(err);
        }
    }
    // delete
    static async remove(req, res, next) {
        const { id } = req.query;
        let user;
        try {
            user = await UserService.deleteUser(id);

            return res.send.status(SUCCESS_CODE);
        }
        catch(err) {
            return next(err);
        }
    }
}