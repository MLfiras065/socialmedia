const product=require('../database/models/product')
const getProduct=async(req,res)=>{
    const prod=await product.findAll({})
    try {
        res.json(prod)
    } catch (err) {
        console.log(err);
        }
    }
    const addProd=async(req,res)=>{
        const added= await product.create({
            title:req.body.title,
            price:req.body.price,
            images:req.body.images,
            description:req.body.description
        })
        try {
      res.json(added)      
        } catch (err) {
            console.log(err);
        }
    }
    const updProd=async(req,res)=>{
        const updProd= await product.create({
            title:req.body.title,
            price:req.body.price,
            images:req.body.images,
            description:req.body.description
        })
        try {
            res.json(updProd)
        } catch (err) {
            console.log(err);
        }
    }
    module.exports={getProduct,addProd,updProd}