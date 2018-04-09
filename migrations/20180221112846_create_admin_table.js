exports.up = function (knex) {
            return knex.schema.createTable('admin', function (t) {
                t.increments('id').primary();
                t.string('username').notNullable().unique().collate('utf8_unicode_ci');
                t.string('password').notNullable();
                t.string('name').notNullable().collate('utf8_unicode_ci');
                t.string('email').unique().collate('utf8_unicode_ci');
                t.timestamps(false, true);
            });
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('admin');
};