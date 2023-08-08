const router=require("express").Router()
const {getProduct,addProd,updProd,deleteProd}=require("../controller/product")
router.get('/',getProduct)
router.post('/add',addProd)
router.put('/put/:id',updProd)
router.delete('/del/:id',deleteProd)
module.exports=router