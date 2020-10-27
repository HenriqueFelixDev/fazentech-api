const knex = require('../database/knex_connection');

const updateRefreshToken = async (userId, refreshToken) =>
    knex('users')
        .update({refresh_token: refreshToken})
        .where({id: userId});

const saveRefreshToken = async (userId, refreshToken) => 
    await updateRefreshToken(userId, refreshToken);

const deleteRefreshToken = async userId =>
    await updateRefreshToken(userId, null);

const getRefreshToken = async userId =>
    knex.select('refresh_token')
        .from('users')
        .where({id: userId})
        .first();

module.exports = {
    saveRefreshToken,
    deleteRefreshToken,
    getRefreshToken
}