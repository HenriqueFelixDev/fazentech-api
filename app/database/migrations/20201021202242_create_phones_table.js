
exports.up = knex => knex.schema.createTable('phones', table => {
        table.increments('id');
        table.integer('user_id')
            .references('users.id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE');
        table.integer('area_code', 2)
            .unsigned() 
            .notNullable()
            .unsigned();
        table.integer('number', 9)
            .notNullable()
            .unsigned();
    });
exports.down = knex => knex.schema.dropTable('phones');