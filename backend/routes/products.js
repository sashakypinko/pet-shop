const express = require('express');
const Product = require('../database/models/product');

const router = express.Router();

router.get('/all', async (req, res) =>{
    res.json(await Product.findAll());
});

router.get('/:id', async (req, res) =>{
    const {id} = req.params;

    if (isNaN(id)){
        res.json({status: 'ERR', message: 'wrong id'}); 
        return;
    }
    const product = await Product.findOne({where: {id: +id}});

    if(!product){
        res.json({status: 'ERR', message: 'product not found'});
        return;
    }
    
    res.json(product);
});

router.get('/add/:title/:price/:discont_price/:description', (req, res) =>{
    const {title, price, discont_price, description} = req.params;
    Product.create({title, price, discont_price, description, categoryId: 1});
    res.json(`добавлено`);
})

module.exports = router;
