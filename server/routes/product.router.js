const router=require("express").Router()
const {getProduct,addProd,updProd}=require("../controller/product")
router.get('/',getProduct)
router.post('/add',addProd)
router.put('/put',updProd)
module.exports=router