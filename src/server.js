const http = require('http');
const router = require('./router');

const server = http.createServer(router);

const port = process.env.PORT || 6968;

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
