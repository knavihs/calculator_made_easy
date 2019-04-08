var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200);

    if(pathname == "/") {
        html = fs.readFileSync("calculator.html", "utf8");
        response.write(html);
    } else if (pathname == "/lux.js") {
        script = fs.readFileSync("script.js", "utf8");
        response.write(script);
    }


    response.end();
}).listen(8888,()=>console.log("server conected"));