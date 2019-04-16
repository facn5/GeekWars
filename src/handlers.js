const fs = require('fs');
const path = require('path');
const qs = require('querystring');

let extType = {
  html: { "content-type": "text/html" },
  css: { "content-type": "text/css" },
  js: { "content-type": "application/javascript" },
  json: { 'content-type': 'application/json' }
}

const handleHome = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("error500");
    } else {
      res.writeHead(200, extType.html);
      res.end(file);
    }
  })
}

const handleError = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "404.html");
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("error500");
    } else {
      res.writeHead(404, extType.html);
      res.end(file);
    }
  })
}


module.exports = {
  home: handleHome,
  error: handleError

}
