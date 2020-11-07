
exports.up = knex => knex.schema.createTable('orders', table => {
        table.increments('id');
        table.integer('user_id')
            .references('users.id')
            .unsigned()
            .notNullable();
        table.timestamp('created_in')
            .notNullable()
            .defaultTo(knex.fn.now());
        table.enum('payment_method', [
            'credit_card', 'bank_slip'
        ]).defaultTo('bank_slip')
        .notNullable();
        table.integer('installment_count')
            .notNullable()
            .defaultTo(1);
        table.string('shipping')
            .notNullable()
            .defaultTo('PAC');
        table.enum('status', [
            'buying', 'complete_purchase', 'preparing_for_shipment', 
            'sent', 'arrived_at_destination'
        ]).notNullable();
    });

exports.down = knex => knex.schema.dropTable('orders');