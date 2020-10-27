
exports.up = knex => knex.schema.createTable('order_products', table => {
        table.integer('product_id')
            .references('products.id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE');
        table.integer('order_id')
            .references('orders.id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE');
        table.integer('quantity', 6);
        table.timestamp('created_in')
            .notNullable()
            .defaultTo(knex.fn.now());
        table.decimal('price', 8, 2)
            .notNullable()
            .unsigned();
        table.primary(['product_id', 'order_id']);
    });

exports.down = knex => knex.schema.dropTable('order_products');