
const {StatusCodes} = require('http-status-codes');
const {BadrequestError, notFoundMiddleware,NotFoundError} = require('../error/export');

const Product = require('../model/product');

const getallsellproduct = async (req,res)=>{
   req.body.createdBy = req.user.userID;
   const products = await Product.find({createdBy:req.body.createdBy}).select('productname picture price rate quantity').sort('productname');
    res.status(200).json({products})
}
const getallproduct =async (req,res)=>{
const product = await Product.find({productname:req.query.search})
.limit(req.query.limit||8)
.skip(req.query.page-1||0)
res.status(200).json(product);
}

const createproduct = async (req,res)=>{
    req.body.createdBy = req.user.userID

    res.status(201).json({Product})
}

const getproduct = async (req,res)=>{
    const {id: productid}= req.params
    const product = await Product.findOne({_id:productid});  //

        res.status(201).json({product})
    }
 
const deleteproduct = async (req,res)=> {
    
        const {id: productid}= req.params
       
        const product = await Product.findOneAndDelete({_id:productid});
        if(!product){
          throw NotFoundError(`No job with ID${productid}`) ;
}
res.status(201).json({product: null, status: "success" } )
}

const updateproduct = async (req,res)=>{
        const {id: productid}= req.params
        const product = await Product.findOneAndUpdate({_id:productid,createdBy:req.user.userID},{new:true,runValidators:true});
        if(!job){
            throw NotFoundError(`No job with ID${productid}`) ;
        }
        
        res.status(200).json({id:jobid, data:req.body});
    }
   
module.exports = {getallproduct,createproduct,getproduct,updateproduct,deleteproduct, getallsellproduct} 