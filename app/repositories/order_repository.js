const knex = require('../database/knex_connection');

const getUserOrderById = (userId, orderId) => {
    return knex.select(
        'orders.id', 'orders.created_in', 'orders.status'
    ).from('orders')
    .where({
        id: orderId,
        user_id: userId
    })
    .first();
}

const getOrderProducts = (orderId) => 
    knex
        .select(
            'products.id', 'products.category_id', 'products.name', 'products.description', 
            'products.price as current_price', 'order_products.quantity', 'order_products.price'
        )
        .from('order_products')
        .leftJoin('products', 'order_products.product_id', '=', 'products.id')
        .whereRaw('?? = ??', ['order_products.order_id', orderId]);

const getUserOrders = userId => {
    return knex.select(
        'orders.id', 'orders.created_in', 'orders.status'
    ).from('orders')
    .where('orders.user_id', '=', userId);
}

module.exports = {
    getUserOrderById,
    getOrderProducts,
    getUserOrders
}