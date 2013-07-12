var fs = require('fs');
var express = require('express');

var INDEXDEFAULT_FILENAME = "index.html";

var getBufferedIndex = function() {
    return fs.readFileSync(INDEXDEFAULT_FILENAME);
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getBufferedIndex().toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});