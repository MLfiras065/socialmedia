const router=require('express').Router()
const { getReview,addRev } = require('../controller/reviews')
router.get('/',getReview)
router.post('/add',addRev)
module.exports=router