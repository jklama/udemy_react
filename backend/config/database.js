const mongoose = require('mongoose')
const connectDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://nimatmg112:Iamgamer009@cluster0.az4rdvg.mongodb.net/mernapp?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((con) => {
      console.log(
        `mongoose Database connected with host: ${con.connection.host}`
      )
    })
}
module.exports = connectDatabase
