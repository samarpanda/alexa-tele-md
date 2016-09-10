var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();

app.get('/', function(req, res){
  res.send('alexa-tele-doc');
});

http.createServer(app).listen(9090);