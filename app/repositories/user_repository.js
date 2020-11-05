const knex = require('../database/knex_connection');

const getUserIdByFirebaseId = firebaseId => 
    knex.select('user_id')
        .from('firebase_users')
        .where({firebase_id: firebaseId})
        .first();

const getUserById = (userId) => 
    knex.select()
        .from('users')
        .where({id: userId})
        .first();

const getAddressByUserId = userId => 
    knex.select()
        .from('adresses')
        .where({user_id: userId});

const getPhonesByUserId = userId =>
    knex.select()
        .from('phones')
        .where({user_id: userId});

const createUser = user => {
    const address = user.address;
    const phone = user.phone;
    const cellphone = user.cellphone;
    const firebaseId = user.firebaseId;
    delete user.address;
    delete user.phone;
    delete user.cellphone;
    delete user.firebaseId;

    return knex.transaction(async (trx) => {
        let userId = await trx.insert(user).into('users');
        phone.user_id = userId;
        cellphone.user_id = userId;
        address.user_id = userId;
        await trx.insert({firebase_id: firebaseId, user_id: userId}).into('firebase_users');
        await trx.insert(phone).into('phones');
        await trx.insert(cellphone).into('phones');
        await trx.insert(address).into('adresses');
    });
};

const updateUser = user => knex('users').update(user).where({id: user.id});

const getByEmail = async (email) => 
    knex.select()
        .from('users')
        .where({email: email});

module.exports = {
    getUserIdByFirebaseId,
    getUserById,
    getAddressByUserId,
    getPhonesByUserId,
    createUser,
    updateUser,
    getByEmail
}