
exports.up = knex => knex.schema.createTable('firebase_users', table => {
    table.string('firebase_id')
        .notNullable();
    table.integer('user_id')
        .references('users.id')
        .unsigned()
        .notNullable();
    table.primary('firebase_id');
  });

exports.down = knex => knex.schema.dropTable('firebase_users');
