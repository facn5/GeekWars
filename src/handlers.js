const fs = require('fs');
const path = require('path');
const qs = require('querystring');

let extType = {
  html: { "content-type": "text/html" },
  css: { "content-type": "text/css" },
  js: { "content-type": "application/javascript" },
  json: { 'content-type': 'application/json' }
}
