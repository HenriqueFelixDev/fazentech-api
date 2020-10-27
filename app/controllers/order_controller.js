const router = require('express').Router();
const orderRepository = require('../repositories/order_repository');

router.get('/', async (req, res) => {
    const ordersResult = await orderRepository.getUserOrders(req.userId);
    
    let orders = [];
    for(let order of ordersResult) {
        order.products = await orderRepository.getOrderProducts(order.id);
        orders.push(order);
    }

    res.json(orders);
});

router.get('/:id([0-9]+)', async (req, res) => {
    const orderId = req.params['id'];
    const order = await orderRepository.getUserOrderById(req.userId, orderId);
    order.products = await orderRepository.getOrderProducts(order.id);
    res.json(order);
});

module.exports = router;