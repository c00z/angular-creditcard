var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/creditcard");

var Credit = require("./creditcard");
module.exports.Credit = Credit;
