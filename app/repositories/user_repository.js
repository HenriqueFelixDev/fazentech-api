const knex = require('../database/knex_connection');

const getUserById = (userId) => 
    knex.select()
        .from('users')
        .where({id: userId})
        .first();

const createUser = user => {
    const address = user.address;
    const phone = user.phone;
    const cellphone = user.cellphone;
    delete user.address;
    delete user.phone;
    delete user.cellphone;

    return knex.transaction(async (trx) => {
        let userId = await trx.insert(user).into('users');
        phone.user_id = userId;
        cellphone.user_id = userId;
        address.user_id = userId;
        console.log(address);
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
    getUserById,
    createUser,
    updateUser,
    getByEmail
}