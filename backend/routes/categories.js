const Category = require('../database/models/category');
const Product = require('../database/models/product');

const express = require('express');
const router = express.Router();

router.get('/all', async (req, res) => {
    res.json(await Category.findAll());
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    if (isNaN(id)) {
        res.json({status: 'ERR', message: 'wrong id'});
        return
    }
    const all = await Product.findAll({where: {categoryId: +id}});
    const category = await Category.findOne({where: {id: +id}});

    if (all.length === 0) {
        res.json({status: 'ERR', message: 'empty category'});
        return
    }

    res.json({
        category,
        data: all
    });
})

module.exports = router;