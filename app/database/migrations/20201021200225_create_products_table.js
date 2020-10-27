
exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id');
    table.integer('category_id')
        .references('categories.id')
        .unsigned()
        .notNullable()
        .onDelete('CASCADE');
    table.string('name', 128).notNullable();
    table.text('description').notNullable();
    table.decimal('price', 8, 2)
      .notNullable()
      .unsigned();
  });

exports.down = knex => knex.schema.dropTable('products');