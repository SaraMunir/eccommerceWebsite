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
async function addProductMainImg( imageObj, productId ){

    console.log('in orm',imageObj)
    const addProductImg = await db.products.findOneAndUpdate(
        { _id: productId}, { "$set": imageObj}
    );
    return { message: `Thank you, updated` }
}
async function addColorObj( colorObj, productId ){

    console.log('in orm',colorObj)
    const addColorObj = await db.products.findOneAndUpdate(
        { _id: productId}, { "$push": {colours: colorObj}}
    );
    return { message: `Thank you, updated` }
}
module.exports = {
    postNewProduct,
    getAllProducts,
    getProductDetail,
    addProductMainImg,
    addColorObj
}