const express = require("express");
const line = require('./line');
const fs = require('fs');

var app = express();

const hostname = 'localhost';
const port = 8000;

/* 2. listen()メソッドを実行して8000番ポートで待ち受け。*/
var server = app.listen(process.env.PORT || port, function(){
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
//Q3これはHerokuにデプロイする際はhostnameは変えなくて良いのか？///

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
    // [2] line.jsの関数をlineを使用してline.jsからレスポンスを受け取る
    //Q1 レスポンスのfunctionを実行する記載方法は合っているのか？
    //req(line.options());
    //req.line('done');
    //line.options();
    //console.log("tttt:" + line.options() + line.options() + line.options() + line.options());
    // [3] フロントエンドに対してレスポンスを返す
    console.log(line.notify());
    res.send(line.notify());    
});
 