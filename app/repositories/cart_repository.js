const knex = require('../database/knex_connection');
const orderRepository = require('../repositories/order_repository');
const productRepository = require('../repositories/product_repository');

const getCartOrder = async userId => 
    await orderRepository.getUserOrders(userId, {status: 'buying'});

const getCart = async userId => {
    let orders = await getCartOrder(userId);
    if(!orders) {
        await createCart(userId);
        orders = await getCartOrder(userId);
    }
    return orders[0];
}

const getCartId = async userId => {
    const idResult = await knex.select('id')
        .from('orders')
        .where({status: 'buying', user_id: userId})
        .first();
    
    if(!idResult) {
        return null;
    }
    
    return idResult.id;
}

const createCart = async userId => 
    knex.insert({user_id: userId, status: 'buying'}).into('orders');

const addProductOnCart = async (userId, productId, quantity) => {
    const product = await productRepository.getProductById(productId);
    let cartId = await getCartId(userId);
    if(!cartId) {
        await createCart(userId);
        cartId = await getCartId(userId);
    }
    
    return knex('order_products')
        .insert({
            product_id: productId,
            order_id: cartId,
            quantity: quantity,
            price: product.price
        });
}

const updateCartProduct = async (userId, productId, quantity) => {
    const cartId = await getCartId(userId);
    
    return knex('order_products')
        .update({quantity: quantity})
        .where({product_id: productId, order_id: cartId});
}

const deleteCartProduct = async (userId, productId) => {
    const cartId = await getCartId(userId);

    return knex('order_products')
        .where({order_id: cartId,product_id: productId})
        .del();
}

const saveCartOnOrders = userId => 
    knex('orders')
        .update({status: 'complete_purchase'})
        .where({user_id: userId, status: 'buying'});

module.exports = {
    getCart,
    addProductOnCart,
    updateCartProduct,
    deleteCartProduct,
    saveCartOnOrders
}