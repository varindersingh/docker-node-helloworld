var http = require('http');
var os = require('os')

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

  response.end("Hello.This is a sample node app running on deis PaaS\n\n"
   
    +"Some os stats using node's os module:\n"
	+"Platform:    " + os.platform()  + "\n"
	+"Hostname:    " + os.hostname()  + "\n"
	+"Free Memmory:" + os.totalmem()/(1024*1024) + "/" +os.freemem()/(1024*1024) + "MB\n"
	+"CPU's:       " + JSON.stringify(os.cpus()) + "\n\n" 

	+"Network:     " + JSON.stringify(os.networkInterfaces())

  	);
});

server.listen(8000);
