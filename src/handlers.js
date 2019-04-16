const http = require('http');
const server = http.createServer(router);

const port = process.env.PORT || 5666;

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
