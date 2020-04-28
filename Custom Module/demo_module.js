var http = require('http');
var date_time = require('./mymodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + date_time.myDateTime());
  res.end();
}).listen(8080); 