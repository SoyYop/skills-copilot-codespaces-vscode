// Create a web server with a rest method that can respond to requests for a JSON-encoded array of comments
// The array of comments should be defined in a separate file, comments.json, and should be loaded by the server
// The server should respond to requests to read all comments, add a comment, and delete a comment
// The server should also respond to requests to update a comment (e.g. to mark it as "read")
// The server should respond to requests to read all comments with the following JSON-encoded array of comments:
// [
//   {
//     "id": 1,
//     "author": "Pete Hunt",
//     "text": "This is one comment"
//   },
//   {
//     "id": 2,
//     "author": "Jordan Walke",
//     "text": "This is *another* comment"
//   }
// ]

// Path: comments.js
// Create a web server with a rest method that can respond to requests for a JSON-encoded array of comments
// The array of comments should be defined in a separate file, comments.json, and should be loaded by the server
// The server should respond to requests to read all comments, add a comment, and delete a comment
// The server should also respond to requests to update a comment (e.g. to mark it as "read")
// The server should respond to requests to read all comments with the following JSON-encoded array of comments:
// [
//   {
//     "id": 1,
//     "author": "Pete Hunt",
//     "text": "This is one comment"
//   },
//   {
//     "id": 2,
//     "author": "Jordan Walke",
//     "text": "This is *another* comment"
//   }
// ]

var http = require("http");
var url = require("url");
var fs = require("fs");
var comments = require("./comments.json");
var querystring = require("querystring");

var server = http.createServer(function(request, response) {
  var urlParts = url.parse(request.url);
  if (urlParts.pathname === "/comments" && request.method === "GET") {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(comments));
  } else if (urlParts.pathname === "/comments" && request.method === "POST") {
    var body = "";
    request.on("data", function(chunk) {
      body += chunk;
    });
    






