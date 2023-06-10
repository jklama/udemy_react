const express = require('express')
const router = express.Router()

const {
  getProducts,
  newProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController')

router.route('/products').get(getProducts)
router.route('/product/new').post(newProducts)
router
  .route('/product/:id')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct)
module.exports = router
