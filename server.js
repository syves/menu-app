var express = require('express');


var port = 2999;
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
  console.log('local server running on port ' + port);
});
