require('dotenv').config(); // --> process.env
const express = require( 'express' );
const fs = require('fs');
const path = require("path");
const orm = require( './db/orm.mongoose' );

const PORT = process.env.PORT || 8080;
const app = express();

var server = app.listen( PORT, function(){ console.log( `[Stitches], http://localhost:${PORT}` ); });
app.use( express.urlencoded({ extended: false }) );
app.use( express.json() );

app.post('/api/newProduct', async function( req,res ){
    const newProductObj = req.body;
    console.log('in server: ', newProductObj)
    const postNewProduct = await orm.postNewProduct( newProductObj );
    res.send(postNewProduct);
})
app.get('/api/getAllProducts', async(req, res)=>{
    const getAllProducts=await orm.getAllProducts();
    res.json(getAllProducts)
})
app.get('/api/getProductDetail/:productId', async(req, res)=>{
    const productId = req.params.productId
    const getProductDetail=await orm.getProductDetail(productId);
    res.json(getProductDetail)
})


app.get('/*', function( req,res ){
    console.log("redirect to index page!");
    res.sendFile( path.join(__dirname, 'build', 'index.html') );
})
