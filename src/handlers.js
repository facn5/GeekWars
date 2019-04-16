const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const query = require('../database/queries/queries.js');

 let extType = {
  html: { "content-type": "text/html" },
  css: { "content-type": "text/css" },
  js: { "content-type": "application/javascript" },
  json: { 'content-type': 'application/json' }
}
const handle500 = (res,err) => {
  res.writeHead(500);
  res.end("error500");

 }
const handleHome = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(pathFile, (err, file) => {
    if (err) {
       handle500(res,err)
    } else {
      res.writeHead(200, extType.html);
      res.end(file);
    }
  })
}
const handlePublic = (url, res) => {
  const ext = url.split('.')[1];
  let pathFile = path.join(__dirname, '..','public', url);
  fs.readFile(pathFile, (err, file) => {
    if (err) {
       handle500(res,err)
    } else {
      res.writeHead(200, extType[ext]);
      res.end(file);
    }
  })
}

 const handle404 = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "404.html");
  fs.readFile(pathFile, (err, file) => {
    if (err) {
 handle500(res,err)
    } else {
      res.writeHead(404, extType.html);
      res.end(file);
    }
  })
}

const handleSignIn = (req,res)=>{
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", () => {
    if (body != null) {
      const userdata = qs.parse(body);
      queries.userExist(userdata.uname, userdata.psw, (err, result) => {
        if (err) {
          handle500(res,err);
        }
        if(result === 0){
          res.writeHead(401)
          res.end()
        }else if(results === 1){
          res.writeHead(200)
          res.end()
        }
      });
    }
  });
}
const handleSignUp = (req,res)=>{

}
 module.exports = {
  home: handleHome,
  public: handlePublic,
  error404: handle404,
  signup:handleSignUp,
  signin:handleSignIn
 }
