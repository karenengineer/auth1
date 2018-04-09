
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', function (t) {
            t.increments('id').primary();
            t.string('username').unique().notNullable().collate('utf8_unicode_ci');
            t.string('password').notNullable();
            t.string('name').notNullable();
            t.string('email').unique().collate('utf8_unicode_ci');
            t.string('role').notNullable();
            t.string('image').notNullable();
            t.timestamps(true, true);
        })
    ]);
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user');
};