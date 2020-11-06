
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name', 128).notNullable();
    table.string('photo');
    table.string('email', 128).notNullable().unique();
    table.string('cpf', 11).notNullable().unique();
    table.string('rg', 16).notNullable();
    table.string('password').notNullable();
    table.dateTime('birthday').notNullable();
    table.string('refresh_token');
  });

exports.down =  knex => knex.schema.dropTable('users');