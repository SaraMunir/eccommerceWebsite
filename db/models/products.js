const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let product = new Schema ({
    category: String,
    subType: String,
    nameOfProduct: String,
    price: Number,
    rating: Number,
    mainImg: {
        imageId: String,
        imageUrl: String,
    },
    colours: [
        {
            nameOfColor: String,
            swatcheImg: {
                imagId: String,
                imageUrl: String,
            },
            sizes: [
                {
                    size: {type: String},
                    qty: {type: Number,default: 50}
                }
            ], 
            imgSrc: [
                {
                    imagId: String,
                    imageUrl: String,
                }
            ],
            rating: Number,
        }
    ]
}, {
        timestamps: true
});

module.exports = mongoose.model('product', product);