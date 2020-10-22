var http = require('http');
const hostname = '127.0.0.1';
const port = 8000;

var server = http.createServer();
server.on('request', doRequest);
var fs = require('fs');

function doRequest(req, res) { 
  
  // var url = "public" + req.url;
  // if (fs.existsSync(url)) {
   //fs.readFile(url, (err, data) => {
  //     if (!err) {

    fs.readFile('./index.html', 'utf-8' , doReard );

    function doReard(err, data) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();
      
    } 
}
server.listen(process.env.PORT || port, hostname, () => {
console.log('Server running at http://127.0.0.1:8000/');
});
