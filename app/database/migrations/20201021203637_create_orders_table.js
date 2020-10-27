
exports.up = knex => knex.schema.createTable('orders', table => {
        table.increments('id');
        table.integer('user_id')
            .references('users.id')
            .unsigned()
            .notNullable();
        table.timestamp('created_in')
            .notNullable()
            .defaultTo(knex.fn.now());
        table.enum('status', [
            'buying', 'complete_purchase', 'preparing_for_shipment', 
            'sent', 'arrived_at_destination'
        ]).notNullable();
    });

exports.down = knex => knex.schema.dropTable('orders');