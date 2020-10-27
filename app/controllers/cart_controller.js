const router = require('express').Router();
const cartRepository = require('../repositories/cart_repository');
const orderRepository = require('../repositories/order_repository');

router.get('/', async (req, res) => {
    const cart = await cartRepository.getCart(req.userId);
    cart.products = await orderRepository.getOrderProducts(cart.id);
    res.json(cart);
});

router.post('/products', async (req, res) => {
    const {productId, quantity} = req.body;
    await cartRepository.addProductOnCart(req.userId, productId, quantity);
    res.status(201).send();
});

router.put('/products', async (req, res) => {
    const {productId, quantity} = req.body;
    await cartRepository.updateCartProduct(req.userId, productId, quantity);
    res.status(204).send();
});

router.delete('/products', async (req, res) => {
    const {productId} = req.body;
    await cartRepository.deleteCartProduct(req.userId, productId);
    res.status(204).send();
});

module.exports = router;