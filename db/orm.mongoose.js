const mongoose = require('mongoose');
const e = require('express');

// const bcrypt = require ( 'bcrypt' );

// const { v4: uuidv4 } = require('uuid');
// dont do this part upward

// mongoose.connect(`mongodb://localhost:27017/StitchesEcommerce`, {useNewUrlParser: true, useFindAndModify: false});



const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {

useNewUrlParser: true, 
useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});

const db = require( './models' );


async function postNewProduct( productData ){
    const dbNewProduct = new db.products( productData );
    const postNewProduct = await dbNewProduct.save();
    return { 
        postNewProduct 
    };
}
async function getAllProducts(){
    const getAllProducts = await db.products.find({});
    return getAllProducts;

}
async function getProductDetail( id ){
    const getProductDetail= await db.products.findOne({
        "_id": id
    })
    return getProductDetail
}

module.exports = {
    postNewProduct,
    getAllProducts,
    getProductDetail
}