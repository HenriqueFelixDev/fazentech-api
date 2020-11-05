const router = require('express').Router();
const {validationResult} = require('express-validator');

const productFilterValidator = require('../domain/validators/product_filter_validator');
const productRepository = require('../repositories/product_repository');
const ResourceNotFoundException = require('../exceptions/resource_not_found_exception');
const InvalidArgumentException = require('../exceptions/invalid_argument_exception');

router.get('/', productFilterValidator, async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new InvalidArgumentException(errors.array());
        }

        const {search, minPrice, maxPrice, categories, limit, offset} = req.query;

        let categoriesList;
        if(categories) {
            categoriesList = JSON.parse(categories)
        }
        
        let products = await productRepository.getAllProducts({
            search, 
            minPrice, 
            maxPrice, 
            categories: categoriesList, 
            limit, 
            offset
        });
    
        res.json(products);
    } catch(e) {
        next(e);
    }
});

router.get('/:id([0-9]+)', async (req, res, next) => {
    try {
        const {id} = req.params;
        let product = await productRepository.getProductById(id);
        if(!product) {
            throw new ResourceNotFoundException(`Nenhum produto com o id ${id} foi encontrado`);
        }
        res.json(product);
    } catch (e) {
        next(e);
    }
});

router.get('/top', async (req, res, next) => {
    try {
        const productsLimit = 10;
        let products = await productRepository.getTopProducts(productsLimit);
    
        if(products.length < productsLimit) {
            products = await productRepository.getRandomProducts(productsLimit);
        }
    
        res.json(products);
    } catch(e) {
        next(e);
    }
});

router.get('/recently-added', async (req, res, next) => {
    try {
        let products = await productRepository.getRecentlyAddedProducts();
        res.json(products);
    } catch(e) {
        next(e);
    }
});

module.exports = router;