import express from "express";
import jwt from "jsonwebtoken";

const jwtPassword = "1234567";

const app = express();
const port = 3000;

app.use(express.json());

const AllUser = [
  {
    username: "shubhamBhattacharya@gmail.com",
    name: "Shubham Bhattacharya",
    gender: "male",
    password: "1234567",
  },
  {
    username: "nehaGupta@gmail.com",
    name: "Neha Gupta",
    gender: "female",
    password: "12345678",
  },
  {
    username: "rahulSharma@gmail.com",
    name: "Rahul Sharma",
    gender: "male",
    password: "123456098",
  },
  {
    username: "anitaVerma@gmail.com",
    name: "Anita Verma",
    gender: "female",
    password: "123456789",
  },
];

function userExist(username, password) {
  let userExist = false;
  for (let i = 0; i < AllUser.length; i++) {
    if (
      AllUser[i].username === username &&
      AllUser[i].password === password
    ) {
      userExist = true;
      break;
    }
  }
  return userExist;
}

// LOGIN (your logic is login, not real signup)
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Username and password are required",
    });
  }

  if (!userExist(username, password)) {
    return res.status(400).json({
      error: "User does not exist",
    });
  }

  const token = jwt.sign({ username }, jwtPassword, {
    expiresIn: "1h",
  });

  return res.status(200).json({
    message: "Signup successful",
    token: token,
  });
});

// PROTECTED ROUTE
app.get("/users", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Unauthorized access",
    });
  }

  // Expecting: Bearer <token>
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtPassword);

    return res.status(200).json({
      message: "Users fetched successfully",
      users: AllUser,
    });
  } catch (err) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
