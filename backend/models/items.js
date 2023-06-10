const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'please add a name'],
  },
})

module.exports = mongoose.model('item', itemSchema)
