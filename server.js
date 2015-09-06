var http = require('http');
function start(app){
  app.set('port', process.env.PORT || 8080);
  var server = http.createServer(app);
  server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
}

exports.start = start;