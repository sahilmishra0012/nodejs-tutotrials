var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hey All! This is Sahil Mishra!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 