var express = require('express');

var app = express();

var controllers = require('./controllers');

app.get("/", function homepage (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/", controllers.creditcard.index)











app.listen(process.env.PORT || 3000, function(){
  console.log("SERVER HAS BECOME AWARE!")
});
