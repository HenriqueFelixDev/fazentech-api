// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'fazentech_db',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/app/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/app/database/seeds`
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'fazentech_db'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/app/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/app/database/seeds`
    }
  }
};
