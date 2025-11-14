import express from 'express'
import fs from 'fs';

const app = express();
const port = 3000;

// ✅ Custom logging middleware
app.use((req, res, next) => {
  const url = req.url;
  const now = new Date().toLocaleString();
  fs.appendFileSync('log.txt', `${url} - ${now}\n`);
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Shubham');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/time', (req, res) => {
  res.send(new Date().toLocaleString());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
