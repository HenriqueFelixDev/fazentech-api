const knex = require('../database/knex_connection');

const getAllCategories = () => knex.select().table('categories');

module.exports = {
    getAllCategories
};