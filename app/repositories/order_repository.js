const knex = require('../database/knex_connection');
const productRepository = require('../repositories/product_repository');

const getOrderProductsWithProducts = async orderProductsList => {
    const orderProducts = [];
    for(let orderProduct of orderProductsList) {
        const product = await productRepository.getProductById(orderProduct.product_id);
        orderProduct.product = product;
        delete orderProduct.product_id;
        delete orderProduct.order_id;
        orderProducts.push(orderProduct);       
    }
    return orderProducts;
}

const getOrdersWithOrderProducts = async ordersList => {
    const orders = [];
    for(const order of ordersList) {
        order.products = await getOrderProducts(order.id);
        delete order.user_id;
        orders.push(order);
    }
    return orders;
}

const getUserOrderById = async (userId, orderId) => {
    const orders = await knex.select()
        .from('orders')
        .where({
            id: orderId,
            user_id: userId
        })
        .first();
    
    return await getOrdersWithOrderProducts(orders);
}

const getOrderProducts = async orderId => {
    const orderProducts = await knex
        .select()
        .from('order_products')
        .where({order_id: orderId});
    return await getOrderProductsWithProducts(orderProducts);
}

const getUserOrders = async (userId, filter = {}) => {
    filter.user_id = userId;
    const ordersResult = await knex.select()
        .from('orders')
        .where(filter);

    if(!ordersResult || ordersResult.length == 0) {
        return null;
    }
    
    return await getOrdersWithOrderProducts(ordersResult);
}

module.exports = {
    getUserOrderById,
    getOrderProducts,
    getUserOrders
}