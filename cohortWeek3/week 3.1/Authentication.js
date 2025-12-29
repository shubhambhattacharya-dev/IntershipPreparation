// in-memory data to simulate a database
// this is for authentication purpose only

import express from "express";
import jwt from "jsonwebtoken";

const jwtPassword = "123456";

const app = express();
const port = 3000;

// 🔍 DEBUG: log every incoming request
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

app.use(express.json());

const AllUser = [
  {
    username: "shubhamBhattacharya",
    password: "1234567",
    name: "Shubham Bhattacharya",
  },
  {
    username: "nehaGupta",
    password: "12345678",
    name: "Neha Gupta",
  },
  {
    username: "rahulSharma",
    password: "123456098",
    name: "Rahul Sharma",
  },
  {
    username: "anitaVerma",
    password: "123456789",
    name: "Anita Verma",
  },
];

// helper function
function userExist(username, password) {
  console.log("Checking userExist for:", username, password);
  for (let i = 0; i < AllUser.length; i++) {
    console.log("Comparing with user:", AllUser[i].username, AllUser[i].password);
    if (
      AllUser[i].username === username &&
      AllUser[i].password === password
    ) {
      console.log("User found and password matches");
      return true;
    }
  }
  console.log("User not found or password doesn't match");
  return false;
}

// SIGNUP
app.post("/signup", (req, res) => {
  const { username, password, name } = req.body;
  console.log("Signup request received:", { username, password, name });

  if (!username || !password) {
    console.log("Missing username or password");
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Check if user already exists (by username only)
  const existingUser = AllUser.find(user => user.username === username);
  if (existingUser) {
    console.log("User already exists");
    return res.status(409).json({ message: "User already exists" });
  }

  // Add new user
  AllUser.push({ username, password, name: name || username });
  console.log("New user added:", username);

  // Optionally, generate token after signup
  const token = jwt.sign({ username }, jwtPassword, {
    expiresIn: "1h",
  });

  return res.json({ message: "User registered successfully", token });
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Login request received:", { username, password });

  if (!username || !password) {
    console.log("Missing username or password");
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const userExists = userExist(username, password);
  console.log("User exists check result:", userExists);

  if (!userExists) {
    console.log("User does not exist or password wrong, returning invalid credentials");
    return res.status(401).json({ message: "Invalid credentials" });
  }

  console.log("Generating token for user:", username);
  const token = jwt.sign({ username }, jwtPassword, {
    expiresIn: "1h",
  });

  return res.json({ token });
});

// PROTECTED ROUTE
app.get("/users", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, jwtPassword);

    // Return list of users without passwords
    const users = AllUser.map(user => ({ username: user.username, name: user.name }));

    return res.json({
      message: "Authorized",
      users: users,
    });
  } catch (error) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
