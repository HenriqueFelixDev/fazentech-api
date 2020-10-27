const { where } = require('../database/knex_connection');
const knex = require('../database/knex_connection');

const getCart = userId => {
    return knex.select(
        'orders.id', 'orders.created_in'
    ).from('orders')
    .where({
        user_id: userId,
        status: 'buying'
    })
    .first();
}

const getCartId = async userId => {
    const idResult = await knex.select('id')
        .from('orders')
        .where({status: 'buying', user_id: userId})
        .first();
    
    return idResult.id;
}

const addProductOnCart = async (userId, productId, quantity) => {
    const priceResult = await knex.select('price')
        .from('products')
        .where({id: productId})
        .first();
    
    const cartId = await getCartId(userId);
    const productPrice = priceResult.price;
    
    return knex('order_products')
        .insert({
            product_id: productId,
            order_id: cartId,
            quantity: quantity,
            price: productPrice
        });
}

const updateCartProduct = async (userId, productId, quantity) => {
    const cartId = await getCartId(userId);
    
    return knex('order_products')
        .update({
            quantity: quantity,
        })
        .where({
            product_id: productId,
            order_id: cartId
        });
}

const deleteCartProduct = async (userId, productId) => {
    const cartId = await getCartId(userId);

    return knex('order_products')
        .where({
            order_id: cartId,
            product_id: productId
        })
        .del();
}

module.exports = {
    getCart,
    addProductOnCart,
    updateCartProduct,
    deleteCartProduct
}