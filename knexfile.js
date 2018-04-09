const database = require('./src/app/configs/database').default;

module.exports = {
    development: database,
    production: database,
    test: database,
    client: 'mysql',
    connection: {
        user: 'root',
        password: 'karen001',
        database: 'beeWeb'
    }
};