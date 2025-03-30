const express=require('express')
const newController=require('../controllers/newsController')
const router=express.Router()


router.route('/').get(newController.getAllNews)
router.route('/guardian').get(newController.getAllGuardian)
router.route('/cryptoDaily').get(newController.getAllCryptoDaily)
router.route('/BSCNews').get(newController.getAllBSCNews)
router.route('/BitcoinNews').get(newController.getAllBitcoinNews)
router.route('/coinTelegraph').get(newController.getAllCoinTelegraph)
router.route('/decrypt').get(newController.getAllDecrypt)



 module.exports=router