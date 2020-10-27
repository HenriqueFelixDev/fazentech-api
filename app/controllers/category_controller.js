const router = require('express').Router();
const categoryRepository = require('../repositories/category_repository');

router.get('/', async (req, res) => {
    try{
        let categories = await categoryRepository.getAllCategories();
        res.json(categories);
    } catch(e) {
        console.log(`ERROR: ${e}`);
        res.json({error: e});
    }
});

module.exports = router;