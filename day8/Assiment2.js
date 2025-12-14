import express from "express";

const app = express();
const port = 3000;

// Global metrics
let totalRequestTime = 0;
let totalRequests = 0;

// Middleware to calculate request handling time
app.use((req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const timeTaken = Date.now() - startTime;

    totalRequestTime += timeTaken;
    totalRequests++;

    const averageTime = totalRequestTime / totalRequests;

    console.log(`Request: ${req.method} ${req.url}`);
    console.log(`Time taken: ${timeTaken} ms`);
    console.log(`Average time: ${averageTime.toFixed(2)} ms`);
    console.log("-------------");
  });

  next();
});

// Sample route
app.get("/", (req, res) => {
  // Simulate some work
  setTimeout(() => {
    res.send("Hello from server");
  }, 200);
});

// Metrics route
app.get("/metrics", (req, res) => {
  const averageTime =
    totalRequests === 0 ? 0 : totalRequestTime / totalRequests;

  res.json({
    totalRequests,
    averageTime: averageTime.toFixed(2) + " ms",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
