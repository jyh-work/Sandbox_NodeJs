var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request received: pathname = ' + pathname);

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		execute(say, "HELLO World!!!", response);
		response.end();
	};
	try
	{
		http.createServer(onRequest).listen(8888);
		console.log('Node server has started.');
	}
	catch(ex) {
		console.log('Server error: ' +  ex);
	};
};

exports.start = start;

function say(word, response) {
	var text = 'You said:' + word;
	console.log(text);
	if (response) {
	  response.write(text);
	};
};

function execute(aFunction, value, response) {
	aFunction(value, response);
};