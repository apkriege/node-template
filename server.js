var fs = require("fs");
var host = "127.0.0.1";
var port = 3000;
var path = require("path");
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/")); //use static files in ROOT/public folder

app.get("/", function(req, res){ //root dir
    res.sendFile(path.join(__dirname+'/index.html'))
});

//TODO add a callback that checks if already listening on that port
app.listen(port, host, function (){
  console.log('Server running on port:'+port);
});
