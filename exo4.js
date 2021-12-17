const http = require("http");
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const current_url = req.url
  const myURL = current_url
  var q = url.parse(myURL, true);
  var qdata = q.query
  console.log(qdata)
    qdata.message ?
    res.end(
        `your message : ${qdata.message}`,
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
