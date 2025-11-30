import http from 'http';
import fs from 'fs';
import { PassThrough, pipeline } from 'stream';

const server = http.createServer((req, res) => {

  const { url, method } = req;
  const now = new Date().toISOString();
  const log = `${now} - ${method} - ${url}\n`;

  // --- Stream Logging (Production Style) ---
  const pass = new PassThrough();
  const fileStream = fs.createWriteStream('record.log', { flags: 'a' });

  pass.end(log);

  pipeline(pass, fileStream, (err) => {
    if (err) console.error("Log pipeline failed:", err);
  });

  // --- Fallback Logging ---
  fs.appendFile('record.txt', log, () => {});

  // --- Simple Routing ---
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end("Home Page");
  }

  if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: "About Page" }));
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end("Page Not Found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
