
exports.up = knex => knex.schema.createTable('adresses', table => {
        table.increments('id');
        table.integer('user_id')
            .references('users.id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE');
        table.string('street', 128)
            .notNullable();
        table.integer('number', 8)
            .unsigned();
        table.enum('state', [
            'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
            'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
            'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
        ]).notNullable();
        table.integer('postal_code', 8)
            .notNullable()
            .unsigned();
        table.string('neighborhood', 128)
            .notNullable();
        table.string('city', 128)
            .notNullable();
        table.string('complement');
    });

exports.down = knex => knex.schema.dropTable('adresses');