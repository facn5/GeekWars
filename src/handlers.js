const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const queries = require('../database/queries/queries.js');
const pwmanager = require('./pwmanager.js');
const ppcookie = require('cookie');
const {
  sign,
  verify
} = require('jsonwebtoken');

let extType = {
  html: {
    "content-type": "text/html"
  },
  css: {
    "content-type": "text/css"
  },
  js: {
    "content-type": "application/javascript"
  },
  json: {
    'content-type': 'application/json'
  }
}
const handle500 = (res, err) => {
  res.writeHead(500);
  res.end("error500");

}
const handleHome = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      handle500(res, err)
    } else {
      res.writeHead(200, extType.html);
      res.end(file);
    }
  })
}
const handlePublic = (url, res) => {
  const ext = url.split('.')[1];
  let pathFile = path.join(__dirname, '..', 'public', url);
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      handle500(res, err)
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
      handle500(res, err)
    } else {
      res.writeHead(404, extType.html);
      res.end(file);
    }
  })
}
const SECRET = "nfkdansfknskfnnfwifwrfmjmjwrrfmwowrorwgj";

const handleSignIn = (req, res) => {
  let data = "";
  req.on("data", chunk => {
    data += chunk.toString();
  });
  req.on("end", () => {
    if (data != null) {
      // console.log(data);
      const userdata = JSON.parse(data);
      // console.log(userdata);
      queries.userExist(userdata.username, (err, usern) => {
        if (err) handle500(res, err);
        if (usern.rows[0].count > 0) {
          queries.getPass(userdata.username, (err, pass) => {
            pwmanager.comparePasswords(userdata.password, pass.rows[0].password, (err, success) => {
              if (success) {
                const userDetails = {
                  "content-type": "application/json",
                  'username': userdata.username
                }

                const cookie = sign(userDetails, SECRET);
                res.writeHead(
                  200, {
                    // 'Location': '/main.html',
                    'Set-Cookie': `udetails=${cookie};`,
                    'content-type': 'application/json'
                  });
                res.end(JSON.stringify({
                  succeed: true
                }));


              } else {
                res.writeHead(401, {
                  "content-type": "application/json"
                })
                res.end(JSON.stringify({
                  succeed: false
                }));
              }
            })
          });
        } else {
          res.writeHead(401, {
            "content-type": "application/json"
          })
          res.end(JSON.stringify({
            succeed: false
          }));
        }
      })
    }
  });
}
const handleSignUp = (req, res) => {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", () => {
    if (body != null) {
      const userdata = qs.parse(body);
      queries.userExist(userdata.uname, (err, resultexist) => {
        if (err) {
          handle500(res, err);
        }
        if (resultexist === 0) {
          queries.addUser(username, password, email, (err, result) => {
            if (err) {
              handle500(res, err);
            }
            res.writeHead(200)
            res.end()
          })
        } else {
          res.writeHead(401)
          res.end()
        }
      });
    }
  });
}
const questionsHandler = (res) => {
  queries.getQuestions((err, results) => {
    if (err) handle500(res, err)
    res.writeHead(200)
    // console.log(results.rows);
    res.end(JSON.stringify(results.rows));
  })
}

const scoreHandler = (res) => {
  queries.getScore("tamer",(err, results) => {
    if (err) handle500(res, err)
    res.writeHead(200)
    console.log(results.rows);
    res.end(JSON.stringify(results.rows[0].score));
  })
}

const authCheck = (req, res) => {
  // console.log("udetail cookie is",req.headers.cookie);
  if (!req.headers.cookie) {
    const message = 'unauthorized';
    res.writeHead(
      401, {
        'Content-Type': 'text/plain',
        'Content-Length': message.length
      }
    );
    res.end(message);
  }
  let jwt;
  try {
    jwt = ppcookie.parse(req.headers.cookie);
  } catch (error) {
    const message = 'unauthorized';
    res.writeHead(401, {
      'Content-Type': 'text/plain',
      'Content-Length': message.length
    })
    res.end(message);
  }

  if (jwt) {
    verify(jwt.udetails, SECRET, (err, jwt) => {
      if (err) {
        const message = 'unauthorized';
        res.writeHead(
          401, {
            'Content-Type': 'text/plain',
            'Content-Length': message.length
          }
        );
        res.end(message);
      } else {
        const message = "authorized";
        res.writeHead(
          200, {
            'Content-Type': 'text/plain',
            'Content-Length': message.length
          }
        );
        return res.end(message);
      }
    });
  }
}

const logout = (req, res) => {
  if (req.headers.cookie) {
    res.writeHead(
      200, {
        'Set-Cookie': 'udetails=0; Max-Age=0'
      }
    );
    res.end()
  }
}

module.exports = {
  home: handleHome,
  public: handlePublic,
  error404: handle404,
  signup: handleSignUp,
  signin: handleSignIn,
  questions: questionsHandler,
  authCheck: authCheck,
  logout : logout,
  score:scoreHandler
}
