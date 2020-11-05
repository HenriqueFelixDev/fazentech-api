const knex = require('../database/knex_connection');

const getProductsWithImages = async productsList => {
    const products = [];

    for(let product of productsList) {
        product.images = await getProductImages(product.id);
        products.push(product);
    }

    return products;
}

const getAllProducts = async (filter = {}) => {
    const {limit = 15, offset = 0, search = '', minPrice = 0, maxPrice, categories} = filter;

    const productsResult = await knex('products')
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

    return await getProductsWithImages(productsResult);
}

const getProductImages = async productId => {
    const productImages = await knex.select('image')
        .from('product_images')
        .where({product_id: productId});
    return productImages.map((productImage) => productImage.image);
}

const getProductById = async productId => {
    const product = await knex.select()
        .from('products')
        .where({id: productId})
        .first();
    
    product.images = await getProductImages(product.id);
    return product;
}

const getTopProducts = async limit => {
    const productsResult = await knex('order_products')
        .select('products.*')
        .join('products', 'products.id', 'order_products.product_id')
        .groupBy('product_id')
        .orderByRaw('count(product_id) desc')
        .limit(limit);
    return await getProductsWithImages(productsResult);
}

const getRandomProducts = async limit => {
    const productsResult = await knex.select()
        .from('products')
        .orderByRaw('rand()')
        .limit(limit);
    return await getProductsWithImages(productsResult);
}

const getRecentlyAddedProducts = async (productsCount = 10) => {
    const productsResult = await knex.select()
        .from('products')
        .limit(productsCount)
        .orderBy('id', 'desc');
    return await getProductsWithImages(productsResult);
}


module.exports = {
    getAllProducts,
    getProductImages,
    getProductById,
    getTopProducts,
    getRecentlyAddedProducts,
    getRandomProducts
};