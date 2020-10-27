var http = require('http');
// var express = require('express');

var port = process.env.PORT || 8000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(process.env.PORT || 8000, '127.0.0.1')
    console.log(`Server running.at http://127.0.0.1:8000/`);