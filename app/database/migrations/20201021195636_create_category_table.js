
exports.up = knex =>  knex.schema.createTable('categories', table => {
      table.increments('id');
      table.string('name', 128).notNullable();
      table.string('description');
      table.string('icon').notNullable();
  });

exports.down = knex => knex.schema.dropTable('categories');