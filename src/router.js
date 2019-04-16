const url = require('url');
const handler = require('./handlers');

const router = (req, res) => {

  let url = req.url;
  if (url === "/") {
    console.log("works home")

    handler.home(res);
  }
else if (url.includes('.')) {
    console.log("works")
  handler.public(url, res);
}
else{
  handler.error404(res);
}

}

module.exports = router;
