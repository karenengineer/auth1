import chai from 'chai';
import chaiHttp from 'chai-http';
import Knex from 'knex';
import database from './../app/configs/database';
import params from '../../app/configs/params';
import App from '../../app/app.js';
import {BAD_REQUEST_CODE, SUCCESS_CODE, VALIDATION_ERROR_CODE} from '../../app/configs/status-codes';
import {INVALID, REQUIRED, USER_NOT_EXIST, VALIDATION_ERROR} from '../../app/configs/messages';
import {insertingUser, testPass} from '../../database/data';

const app = App();
const expect = chai.expect;
const knex = Knex(database);

chai.should(); 
chai.use(chaiHttp);

let token = '';
let user = {
    name: 'Karen',
    username: 'karenengineer',
    password: '123456',
    email: 'example12@gmail.com'
};
let user1 = {
    name: 'test',
    username: 'testing',
    password: '123456',
    email: 'test121@gmail.com'
};
let admin = {
    name: 'Admin',
    username: 'Adminofwebsite',
    password: '123456',
    email: 'exampleadmin@gmail.com',
    role: 'admin'
};

describe('Auth Module', () => {
    // describe('Register as user', () => {
    //  it('Should create user', (done) => {
    //         chai.request(app)
    //             .post('/api/auth/login')
    //             .send(user)
    //             .end((err, res) => {
    //                 if (err) console.log("error ");
    //                 res.body.should.be.a('object');
    //                 res.body.users.should.have.property('username');
    //                 res.body.users.should.have.property('password');
    //                 res.body.users.should.have.property('email');
    //                 res.body.users.should.have.property('name');
    //                 res.body.users.should.have.property('role');
    //                 res.body.users.should.have.property('id');
    //             done();
    //         });
    //     });
    // });
    describe('Register as admin', () => {
        it('Should create user', (done) => {
            chai.request(app)
                .post('/api/auth/register/ad')
                .send(admin)
                .end((err, res) => {
                    if (err) console.log("error ");

                    res.body.should.be.a('object');
                    res.body.users.should.have.property('username');
                    res.body.users.should.have.property('password');
                    res.body.users.should.have.property('email');
                    res.body.users.should.have.property('name');
                    res.body.users.should.have.property('role');
                    res.body.users.should.have.property('id');

                    done();
                });
        });
    });

    // describe('Login', () => {
    //     it('Should Login user',function(done) {
    //         chai.request(app)
    //             .post('/api/auth/login/ad?username=' + user.username + '&password=' + user.password)
    //             .end((err, res) => {
    //                 if (err) console.log("error ");

    //                 Token = res.body.token;
    //                 user.id = res.body.users[0].id;            
    //                 res.body.should.be.a('object');
    //                 res.body.users[0].should.have.property('username');
    //                 res.body.users[0].should.have.property('password');
    //                 res.body.users[0].should.have.property('email');
    //                 res.body.users[0].should.have.property('name');
    //                 res.body.users[0].should.have.property('role');
    //                 res.body.users[0].should.have.property('id');

    //                 done();
    //             });
    //     });
    // });

    // describe('Update', () => {
    //     it('Should update user data(user)', (done) => {
    //         chai.request(app)
    //             .put('/api/auth/users/' + user.id + "?id=" + user.id)
    //             .set('Authorization', "Bearer  " + Token)
    //             .send({
    //                 username: 'updatedUusername',
    //                 name: 'updatedName'
    //             })
    //             .end((err, res) => {
    //                 if (err) console.log("error ");

    //                 res.body.should.be.a('object');
    //                 res.body.should.have.property('id');
    //                 res.body.should.have.property('username');
    //                 res.body.should.have.property('password');
    //                 res.body.should.have.property('email');
    //                 res.body.should.have.property('name');
    //                 res.body.should.have.property('role');

    //                 done();
    //             });
    //     });
    // });

    describe('Login as admin', () => {
        it('Should Login admin', function (done) {
            chai.request(app)
                .post('/api/auth/login?username=' + admin.username + '&password=' + admin.password)
                .end((err, res) => {
                    if (err) console.log("error ");

                    AdmToken = res.body.token;
                    admin.id = res.body.users[0].id;
                    res.body.should.be.a('object');
                    res.body.users[0].should.have.property('username');
                    res.body.users[0].should.have.property('password');
                    res.body.users[0].should.have.property('email');
                    res.body.users[0].should.have.property('name');
                    res.body.users[0].should.have.property('role');
                    res.body.users[0].should.have.property('id');

                    done();
                });
        });
    });

    describe('Admin creating a user', () => {
        it('Should create user', (done) => {
            chai.request(app)
                .post('/api/auth/admin/' + admin.id)
                .set('Authorization', "Bearer  " + AdmToken)
                .send(user1)
                .end((err, res) => {
                    if (err) console.log("error ");
                    user1.id = res.body.id;
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    res.body.should.have.property('email');
                    res.body.should.have.property('name');
                    res.body.should.have.property('role');

                    done();
                });
        });
    });

    describe('Admin Getting user', () => {
        it('Should Get  test user data', (done) => {
            chai.request(app)
                .get('/api/auth/admin/' + admin.id + "?id=" + user1.id)
                .set('Authorization', "Bearer  " + AdmToken)
                .end((err, res) => {

                    if (err) console.log("error ");
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('Admin Updating user', () => {
        it('Should update user data', (done) => {
            chai.request(app)
                .put('/api/auth/admin/' + admin.id + "?id=" + user1.id)
                .set('Authorization', "Bearer  " + AdmToken)
                .send({
                    username: 'updatedUusernameAsadmin',
                    name: 'updatedNameAsadmin'
                })
                .end((err, res) => {
                    if (err) console.log("error ");

                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    res.body.should.have.property('email');
                    res.body.should.have.property('name');
                    res.body.should.have.property('role');

                    done();
                });
        });
    });

    describe('Admin Deleting User)', () => {
        it('Should delete user', (done) => {
            chai.request(app)
                .delete('/api/auth/admin/' + admin.id + "?id=" + user1.id)
                .set('Authorization', "Bearer  " + AdmToken)
                .end((err, res) => {
                    if (err) console.log("error ");

                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });

    describe('Admin Deleting User)', () => {
        it('Should delete admin', (done) => {
            chai.request(app)
                .delete('/api/auth/admin/' + admin.id + "?id=" + admin.id)
                .set('Authorization', "Bearer  " + AdmToken)
                .end((err, res) => {
                    if (err) console.log("error ");

                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });

});