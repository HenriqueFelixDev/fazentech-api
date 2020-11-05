const router = require('express').Router();

const categoryRepository = require('../repositories/category_repository');

router.get('/', async (req, res, next) => {
    try{
        let categories = await categoryRepository.getAllCategories();
        res.json(categories);
    } catch(e) {
        next(e);
    }
});

module.exports = router;