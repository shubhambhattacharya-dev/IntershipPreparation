import http from 'http';

function logger(req) {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
}

const server = http.createServer((req, res) => {

    // Logging
    logger(req);

    if (req.url == '/' && req.method == 'GET') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end("it is a home page ");

    } else if (req.url == '/health' && req.method == 'GET') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({
            message: "i am healthy"
        }));

    } else if (req.url == '/user' && req.method == 'POST') {

        let body = "";

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            console.log("POST Body:", body);

            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify({ received: body }));
        });

    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end("404 Not Found");
    }
});

server.listen(8000, () => {
    console.log(`http://localhost:8000`);
});
