const express = require('express');
const app = express();

// Controllers
const categoryController = require('./controllers/category_controller');
const productController = require('./controllers/product_controller');
const userController = require('./controllers/user_controller');
const authController = require('./controllers/auth_controller');
const orderController = require('./controllers/order_controller');
const cartController = require('./controllers/cart_controller');

// Middlewares
const authMiddleware = require('./middlewares/auth_middleware');

app.use(express.json())
app.use('/categories', categoryController);
app.use('/products', productController);
app.use('/user', userController);
app.use('/auth', authController);
app.use('/orders', authMiddleware, orderController);
app.use('/cart', authMiddleware, cartController);

app.use((error, req, res, next) => {
    if(typeof error.code == 'number') {
        res.status(error.code)
            .json({error: {code: error.code, message: error.message}});
    } else {
        res.status(500)
            .json({error: {code: 500, message: 'Ocorreu um erro interno no servidor: ' + error.message}});
    }
});



app.listen(80, () => {
    console.log("Listenning ON https://127.0.0.1:80");
});