import { AuthController } from './auth.controller.js';
import middlewares from '../../middlewares';
import schemas from './schemas';
import uploader from '../../middlewares';

export default (router) => {
    const {
        login,register,update,remove
    } = AuthController;

    router.post('/login', ...middlewares(schemas, 'login'), login);
    router.post('/register', uploader,...middlewares(schemas, 'register'), register);
    router.put('/update', ...middlewares(schemas, 'update'), update);
    router.delete('/remove', ...middlewares(schemas, 'delete'), remove);

};