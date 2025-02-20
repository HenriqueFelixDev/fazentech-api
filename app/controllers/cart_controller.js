const router = require('express').Router();
const {validationResult} = require('express-validator');

const cartRepository = require('../repositories/cart_repository');
const cartProductValidator = require('../domain/validators/cart_product_validator');
const cartValidator = require('../domain/validators/cart_validator');

const InvalidArgumentException = require('../exceptions/invalid_argument_exception');
const { saveCartOnOrders } = require('../repositories/cart_repository');

router.get('/', async (req, res, next) => {
    try {
        const cart = await cartRepository.getCart(req.userId);
        cart.total = cart.products.reduce(
            (total, product) => total + Number(product.price) * product.quantity
        , 0);
        res.json(cart);
    } catch(e) {
        next(e);
    }
});

router.put('/', cartValidator, async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new InvalidArgumentException(errors.array());
        }

        const {paymentMethod, installmentCount, shipping} = req.body;

        if(!paymentMethod && !installmentCount && !shipping) {
            throw new InvalidArgumentException([], 'Pelo menos 1 argumento deve ser passado');
        }

        const cart = {};

        if(paymentMethod) {
            cart['payment_method'] = paymentMethod;
        }

        if(installmentCount) {
            cart['installment_count'] = installmentCount;
        }

        if(shipping) {
            cart['shipping'] = shipping;
        }
        
        await cartRepository.updateCart(req.userId, cart);
        return res.status(204).send();
    } catch(e) {
        next(e);
    }
});

router.post('/products', cartProductValidator, async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new InvalidArgumentException(errors.array());
        }

        const {productId, quantity} = req.body;
        await cartRepository.addProductOnCart(req.userId, productId, quantity);
        res.status(201).send();
    } catch(e) {
        next(e);
    }
});

router.put('/products', cartProductValidator, async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new InvalidArgumentException(errors.array());
        }
        
        const {productId, quantity} = req.body;
        await cartRepository.updateCartProduct(req.userId, productId, quantity);
        res.status(204).send();
    } catch(e) {
        next(e);
    }
});

router.delete('/products/:id([0-9]+)', async (req, res, next) => {
    try {
        const {id} = req.params;
        await cartRepository.deleteCartProduct(req.userId, id);
        res.status(204).send();
    } catch(e) {
        next(e);
    }
});

router.post('/confirm', async (req, res, next) => {
    try {
        await saveCartOnOrders(req.userId);
        res.status(204).send();
    } catch(e) {
        next(e);
    }
});

module.exports = router;