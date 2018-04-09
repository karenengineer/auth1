import passport from './passport';
import validator from './validator';
import upload from './uploader';

export default (schemas, actionName) => {

    let middlewares = [];
    let uploader;

    if (!schemas[actionName]) {
        return middlewares;
    }

    if (schemas[actionName].authentication) {
        middlewares.push(passport);
    }

    if (schemas[actionName].authentication) {
        uploader = upload;
    }

    if (schemas[actionName].validation) {
        middlewares.push(validator(schemas[actionName].validation));
    }

    return middlewares;
};