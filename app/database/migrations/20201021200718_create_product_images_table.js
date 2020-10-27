
exports.up = knex => knex.schema.createTable('product_images', table => {
      table.increments('id');
      table.integer('product_id')
        .references('products.id')
        .unsigned()
        .notNullable()
        .onDelete('CASCADE');
    table.string('image').notNullable();
  });

exports.down = knex => knex.schema.dropTable('product_images');