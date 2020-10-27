const knex = require('../database/knex_connection');

const getAllProducts = (filter = {}) => {
    const {limit = 15, offset = 0, search = '', minPrice = 0, maxPrice, categories} = filter;

    return knex('products')
        .where(function() {
            this.where('products.name', 'like', `%${search}%`);
            this.orWhere('products.description', 'like', `%${search}%`);
        })
        .where((builder) => {
            builder.where('products.price', '>=', minPrice);

            if(maxPrice)  builder.where('products.price', '<=', maxPrice);
            
            if(categories) builder.whereIn('products.category_id', categories);
        })
        .limit(limit)
        .offset(limit * offset);
}

const getProductImages = productId =>
    knex.select('image')
        .from('product_images')
        .where({product_id: productId});

const getProductById = productId =>
    knex.select()
        .from('products')
        .where({id: productId})
        .first();

const getTopProducts = async limit =>
    knex('order_products')
        .select('products.*')
        .join('products', 'products.id', 'order_products.product_id')
        .groupBy('product_id')
        .orderByRaw('count(product_id) desc')
        .limit(limit);

const getRandomProducts = limit =>
    knex.select()
        .from('products')
        .orderByRaw('rand()')
        .limit(limit);

const getRecentlyAddedProducts = (productsCount = 10) =>
    knex.select()
        .from('products')
        .limit(productsCount)
        .orderBy('id', 'desc');


module.exports = {
    getAllProducts,
    getProductImages,
    getProductById,
    getTopProducts,
    getRecentlyAddedProducts,
    getRandomProducts
};