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
    const category = await Category.findOne({where: {id: +id}});

    res.json(category);
})

module.exports = router;