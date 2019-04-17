const url = require('url');
const handler = require('./handlers');

const router = (req, res) => {

  let url = req.url;
  if (url === "/") {
    handler.home(res);
  } else if (url.includes('.')) {
    handler.public(url, res);
  } else if (url === '/signup') {
    if (req.method === 'POST') {
      handler.signup(req, res);
    }
  } else if (url === '/login') {
    if (req.method === 'POST') {
      handler.signin(req, res);
    }
  } else if (url === '/getquestions') {
    handler.questions(res)
  } else if(url === '/auth'){
    handler.authCheck(req,res);
  }else {
    handler.error404(res);
  }
}

module.exports = router;
