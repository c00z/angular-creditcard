var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CreditSchema = new Schema({
  name: String,
  cardNumber: Number,
  month: Number,
  year: Number,
  cvc: Number
});

var Credit = mongoose.model("Credit", CreditSchema);

module.exports = Credit;
