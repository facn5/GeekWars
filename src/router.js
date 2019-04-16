const url = require('url');
const handler = require('./handlers');

const router = (req, res) => {

  let url = req.url;
  if (url === "/") {
    handler.home(res);
  }
else{
  handler.error(res);
}

}

module.exports = router;
