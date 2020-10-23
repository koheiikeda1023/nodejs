const express = require("express");
const line = require('./line');
const fs = require('fs');
const app = express();

const hostname = 'localhost';
const port = 8000;

/* 2. listen()メソッドを実行して8000番ポートで待ち受け。*/
var server = app.listen(port, function(){
  console.log('Server running at http://' + hostname + ':' + port + '/');
});

// [1] フロントエンドからのリクエストを受け付けてHTMLを表示したい
app.get('/', function(req, res, next) {
  function doReard(err, data) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();
  }
  fs.readFile('./index.html', 'utf-8' , doReard );
});

// [1] フロントエンドからのボタンを押したというアクションによるhttpリクエストを受け付けたい
app.get('/line/action', function(req, res, next) {
    // [2] line.jsの関数をhofeを使用してline.jsからレスポンスを受け取る
    // [3] フロントエンドに対してレスポンスを返す
    res.send('hello world');
    //res.send(line.hofe());
});
