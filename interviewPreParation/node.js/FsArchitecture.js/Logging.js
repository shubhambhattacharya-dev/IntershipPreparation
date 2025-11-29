import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  const url = req.url;
  const now = new Date().toLocaleString();

  const log = `${url} -- ${now}\n`;

  fs.appendFile('record.txt', log, (err) => {
    if (err) console.log(err);
  });

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end("Welcome to Home Page");

  } else if (url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ status: 'active' }));

  } else if (url === '/time') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end(now);

  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
