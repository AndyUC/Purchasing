const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productname:{
        type: String,
        require:[true,'Please provide your Product Name'],
        maxlength:50
    },
    picture:{
        type: String,
        require:[true,'Please provide Product Brand'],
        maxlength:20
    },
    description:{
        type: String,
        require:[true,'Describe detailly increase purchasing rate. Please provide Description'],
        maxlength:20
    },
    price:{
        type: Number,
        require:[true,'Please provide how much is this Product you want to Buy'],
        maxlength:9
    },        
    quantity:{
        type: Number,
        maxlength:9
        },
    rate:{
        type:Number
    },
    Selled:{
        type: Number
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require:[true,'Please provide User']
    }
},
{timestamps:true}
)
module.exports = mongoose.model('Product',ProductSchema)