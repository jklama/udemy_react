const Product = require('../models/products')
const Item = require('../models/items')
const ErrorHandler = require('../utlis/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncError')
exports.newProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(201).json({
    success: true,
    product,
  })
})

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    return next(new ErrorHandler('product not found', 404))
  }
  res.status(200).json({
    success: true,
    product,
  })
})
exports.getProducts = async (req, res, next) => {
  const products = await Product.find()
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  })
}

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id)
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'product not found',
    })
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  })
  res.status(200).json({
    success: true,
    product,
  })
}

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    return res.status(400).json({
      success: false,
      message: 'product not found',
    })
  }
  await product.deleteOne()

  res.status(200).json({
    success: true,
    message: 'product is deleted',
  })
}
