import crypto from 'crypto';

export const password = 'user_pass';

export const insertingUser = {
    id: 1,
    name: 'Test User',
    email: 'user@example.com',
    password: crypto
        .createHash('sha1')
        .update(password + 'salt')
        .digest('hex')
}; 