const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const current_url = req.url;
  current_url === '/welcome' ?
    res.end(JSON.stringify(
      {
        "message":"Hello World",
      }
    ))
  :
  res.end(JSON.stringify(
    {
      "message":"not found",
    }
  ))
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
