var express = require('express');
var app = express();

// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
app.use(express.static( __dirname + '/public/dist/public' ));
// app.use(bodyParser.json()); 
// mongoose.connect('mongodb://localhost/weather_api');
// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(8000, function(){
    console.log("on port 8000");
})