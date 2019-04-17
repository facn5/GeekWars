const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const queries = require('../database/queries/queries.js');

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
  let data = "";
  req.on("data", chunk => {
    data += chunk.toString();
  });
  req.on("end", () => {
    if (data != null) {
      // console.log(data);
      const userdata = JSON.parse(data);
      // console.log(userdata);
      queries.checkPassword(userdata.username, userdata.password, (err, result) => {
        if (err) {
          handle500(res,err);
        }
        // console.log(result.rows[0].count);
        if(result.rows[0].count === 1){
          res.writeHead(200,{"content-type":"application/json"})
          res.end(JSON.stringify({exist:1}))
       }else {
         res.writeHead(401,{"content-type":"application/json"})
         res.end(JSON.stringify({exist:0}));
       }

       // else{
        //   // console.log(userdata.uname);
        //   // console.log(userdata.psw);
        //   res.writeHead(401)
        //   res.end()
        // }
      });
    }
  });
}
const handleSignUp = (req,res)=>{
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", () => {
    if (body != null) {
      const userdata = qs.parse(body);
      queries.userExist(userdata.uname,(err, resultexist) => {
        if (err) {
          handle500(res,err);
        }
        if(resultexist === 0){
          queries.addUser(username,password,email,(err,result)=>{
            if(err){
              handle500(res,err);
            }
            res.writeHead(200)
            res.end()
          })
        }else{
          res.writeHead(401)
          res.end()
        }
      });
    }
  });
}
 module.exports = {
  home: handleHome,
  public: handlePublic,
  error404: handle404,
  signup:handleSignUp,
  signin:handleSignIn
 }
