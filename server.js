var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

var host = 'localhost';
var port = 26737;

http.createServer(function (req, res) {
    handleRequest(req, res);
}).listen(port, host);

function handleRequest(req, res) {
    var pathname = __dirname + url.parse(req.url).pathname;
    if (path.extname(pathname) == "") {
        pathname += "/";
    }
    if (pathname.charAt(pathname.length - 1) == "/") {
        pathname += "index.html";
    }

    if (path.isAbsolute(pathname)) {
        switch (path.extname(pathname)) {
            case ".html":
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                break;
            case ".js":
                res.writeHead(200, {
                    "Content-Type": "text/javascript"
                });
                break;
            case ".css":
                res.writeHead(200, {
                    "Content-Type": "text/css"
                });
                break;
            case ".gif":
                res.writeHead(200, {
                    "Content-Type": "image/gif"
                });
                break;
            case ".jpg":
                res.writeHead(200, {
                    "Content-Type": "image/jpeg"
                });
                break;
            case ".png":
                res.writeHead(200, {
                    "Content-Type": "image/png"
                });
                break;
            case ".pdf":
                res.writeHead(200, {
                    "Content-Type": "application/pdf"
                });
                break;
            case ".php":
                res.writeHead(200, {
                    "Content-Type": "text/x-php"
                });
                break;
            default:
                res.writeHead(200, {
                    "Content-Type": "application/octet-stream"
                });
        }

        fs.readFile(pathname, function (err, data) {
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end("<h1>404 Not Found</h1>");
    }
}

console.log('Server is running at ' + host + ':' + port);