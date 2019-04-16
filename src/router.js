const url = require('url');
const handler = require('./handlers');

const router = (req, res) => {

  let url = req.url;
  if (url === "/") {
    console.log("home page");
  }
else{
  console.log("error");


}

}

module.exports = router;
