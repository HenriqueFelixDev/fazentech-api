const admin = require('firebase-admin');

const knex = require('../database/knex_connection');

const createFirebaseUser = async (email, cellphone, password, name) => {
    const user = await admin.auth().createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: name,
        phoneNumber: cellphone
    });

    return user.uid;
}

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
    createFirebaseUser,
    saveRefreshToken,
    deleteRefreshToken,
    getRefreshToken
}