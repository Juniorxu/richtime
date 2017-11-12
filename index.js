var http = require('http');
var fs = require('fs');
var url = require('url');

//console.log(Object.keys(http))
var port = process.env.PORT || 80;

var server = http.createServer(function (request, response) {

  var temp = url.parse(request.url, true);
  var path = temp.pathname;
  var query = temp.query;
  var method = request.method;

  //从这里开始看，上面不要看

  if (path === '/' || path === '/index.html') { // 如果用户请求的是 / 路径
    let string = fs.readFileSync('./index.html');
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.end(string)
  } else if (path === '/about.html') {
    let string = fs.readFileSync('./about.html');
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.end(string)
  } else if (path === '/css/index.css') {
    let string = fs.readFileSync('./css/index.css');
    response.setHeader('Content-Type', 'text/css');
    response.end(string)
  } else if (path === '/css/home.css') {
    let string = fs.readFileSync('./css/home.css');
    response.setHeader('Content-Type', 'text/css');
    response.end(string)
  } else if (path === '/css/about.css') {
    let string = fs.readFileSync('./css/about.css');
    response.setHeader('Content-Type', 'text/css');
    response.end(string)
  } else if (path === '/vendors/jquery.min.js') {
    let string = fs.readFileSync('./vendors/jquery.min.js');
    response.setHeader('Content-Type', 'text/javascript');
    response.end(string)
  } else if (path === '/js/home.js') {
    let string = fs.readFileSync('./js/home.js');
    response.setHeader('Content-Type', 'text/javascript');
    response.end(string)
  } else if (path === '/images/home.png') {
    let string = fs.readFileSync('./images/home.png');
    response.setHeader('Content-Type', 'image/png');
    response.end(string)
  } else if (path === '/images/heying.jpg') {
    let string = fs.readFileSync('./images/heying.jpg');
    response.setHeader('Content-Type', 'image/png');
    response.end(string)
  } else if (path === '/images/b-icon1.png') {
    let string = fs.readFileSync('./images/b-icon1.png');
    response.setHeader('Content-Type', 'image/png');
    response.end(string)
  } else if (path === '/images/b-icon2.png') {
    let string = fs.readFileSync('./images/b-icon2.png');
    response.setHeader('Content-Type', 'image/png');
    response.end(string)
  } else if (path === '/images/b-icon3.png') {
    let string = fs.readFileSync('./images/b-icon3.png');
    response.setHeader('Content-Type', 'image/png');
    response.end(string)
  } else if (path === '/images/erweima.png') {
    let string = fs.readFileSync('./images/erweima.png');
    response.setHeader('Content-Type', 'image/png');
    response.end(string)
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.end('找不到页面')
  }

  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
});

server.listen(port);
console.log('监听 ' + port + ' 成功，请打开 http://localhost:' + port);