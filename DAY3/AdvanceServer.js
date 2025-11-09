import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  const url = req.url;
  const now = new Date().toLocaleString();

  // log request
  fs.appendFileSync("log.txt", `${url} - ${now}\n`);

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Shubham");
  } 
  else if (url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
  }
  else if (url === "/time") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(now);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
