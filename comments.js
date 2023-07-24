// Create a web server that can respond to requests for /comments.json with a JSON-encoded array of comments, 
// much like your server from the previous exercise. However, if a query string is present with a parameter named 
// "count" that is an integer, then only the first count comments should be included in the response.

var http = require("http");
var url = require("url");

var comments = [
	{ name: "John", message: "Hello!" },
	{ name: "Mary", message: "Hi!" },
	{ name: "Joe", message: "Hey there!" }
];

var server = http.createServer(function(request, response) {
	var urlData = url.parse(request.url, true);
	if (urlData.pathname === "/comments.json") {
		if (urlData.query.count) {
			response.end(JSON.stringify(comments.slice(0, urlData.query.count)));
		} else {
			response.end(JSON.stringify(comments));
		}
	} else {
		response.statusCode = 404;
		response.end();
	}
});

server.listen(8080);