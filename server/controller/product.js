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
            description:req.body.description,
            bought:req.body.bought,
            userid:req.body.userid
        })
        try {
      res.json(added)      
        } catch (err) {
            console.log(err);
        }
    }
    const updProd=async(req,res)=>{
        const {title,price,images,description}=req.body
        const updProd= await product.update({title,price,images,description},{where:{id:req.params.id}})
        try {
            res.json(updProd)
        } catch (err) {
            console.log(err);
        }
    }
    const deleteProd=async(req,res)=>{
        const del=await product.destroy({where:{id:req.params.id}})
    try {
        res.json(del)
    } catch (err) {
        console.log(err);
    }
    }

    module.exports={getProduct,addProd,updProd,deleteProd}