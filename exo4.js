const http = require("http");
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(
    200,
    {
      'Content-Type': 'application/json'
    }
  );
  var q = url.parse(req.url, true);
    q.query.message ?
    res.end(
        `your message : ${q.query.message}`,
    )
  :
  res.end(JSON.stringify(
    {
      "message":"not good page",
    }
  ))
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
