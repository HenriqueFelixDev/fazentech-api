const router = require('express').Router();

const orderRepository = require('../repositories/order_repository');

router.get('/', async (req, res, next) => {
    try {
        const orders = await orderRepository.getUserOrders(req.userId);

        const filteredOrders = orders.filter((order) => order.status != 'buying');

        for(let order of filteredOrders) {
            order.total = order.products.reduce((total, product) => 
                total + Number(product.price) * product.quantity
            , 0);
        }
        res.json(filteredOrders);
    } catch(e) {
        next(e);
    }
});

router.get('/:id([0-9]+)', async (req, res, next) => {
    try {
        const orderId = req.params['id'];
        const order = await orderRepository.getUserOrderById(req.userId, orderId);
        order.products = await orderRepository.getOrderProducts(order.id);
        res.json(order);
    } catch(e) {
        next(e);
    }
});

module.exports = router;