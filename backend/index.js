const express = require('express');
const categories = require('./routes/categories');
const sale = require('./routes/sale');
const order = require('./routes/order');
const products = require('./routes/products');
const sequelize = require('./database/database');
const cors = require('cors')
const Category = require('./database/models/category');
const Product = require('./database/models/product');
const PORT = 3333;

Category.hasMany(Product);

const app = express();
app.use(express.static('public'))
app.use(cors({
    origin: '*'
}));

console.log(process.argv);

// Imitate long requests to see skeletons 
if (process.argv[2]) {
    const delay = () => new Promise(res => setTimeout(res, process.argv[2]));
    
    app.use(async (req, res, next) => {
        await delay();
        next();
    });
}


app.use(express.urlencoded());
app.use('/categories', categories);
app.use('/products', products);
app.use('/sale', sale);
app.use('/order', order);


app.use(express.json());

const start = async () => {
    try {
        await sequelize.sync().then();

        app.listen(PORT, () => {
            console.log(`\n\nServer started on ${PORT} port...`);
        })
    } catch (err) {
        console.log(err);
    }
};

start();