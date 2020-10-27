const router = require('express').Router();
const productRepository = require('../repositories/product_repository');
const ResourceNotFoundException = require('../exceptions/resource_not_found_exception');


const getProductImages = async productId => {
    let productImages = await productRepository.getProductImages(productId);
    return productImages.map(productImage => productImage.image);
}

router.get('/', async (req, res) => {
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

    let returnedProducts = [];
    for(let product of products) {
        product.images = await getProductImages(product.id);
        returnedProducts.push(product);
    }

    res.json(returnedProducts);
});

router.get('/:id([0-9]+)', async (req, res, next) => {
    try {
        const {id} = req.params;
        let product = await productRepository.getProductById(id);
        if(!product) {
            throw new ResourceNotFoundException(`Nenhum produto com o id ${id} foi encontrado`);
        }
        product.images = await getProductImages(id);
        res.json(product);
    } catch (e) {
        next(e);
    }
});

router.get('/top', async (req, res) => {
    const productsLimit = 10;
    let resultProducts = await productRepository.getTopProducts(productsLimit);

    if(resultProducts.length < productsLimit) {
        resultProducts = await productRepository.getRandomProducts(productsLimit);
    }
    let products = [];
    for(let product of resultProducts) {
        product.images = await getProductImages(product.id);
        products.push(product);
    }

    res.json(products);
});

router.get('/recently-added', async (req, res) => {
    try {
        let productsResult = await productRepository.getRecentlyAddedProducts();
        let products = [];
        for(let product of productsResult) {
            product.images = await getProductImages(product.id);
            products.push(product);
        }
        res.json(products);
    } catch(e) {
        console.log(e);
        res.json({error: e});
    }
});

module.exports = router;