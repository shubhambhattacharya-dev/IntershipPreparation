import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(express.json());

/* -------------------- MONGOOSE CONNECTION -------------------- */
mongoose
  .connect(
    "mongodb+srv://getinput2025_db_user:lYgQKwa1ziRdQjHx@cluster0.6oniuqs.mongodb.net/Learn?appName=Cluster0"
  )
  .then(() => {
    console.log("mongoose connect successful");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

/* -------------------- USER SCHEMA -------------------- */
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

/* -------------------- SIGNUP ROUTE -------------------- */
app.post("/signup", async (req, res) => {
  const { username, password, name } = req.body;

  if (!username || !password || !name) {
    console.log("Username, password and name are required");
    return res.status(400).json({
      error: "Username, password and name are required",
    });
  }

  try {
    // check if user exists
    const userExist = await UserModel.findOne({ email: username });
    if (userExist) {
      console.log("User already exists");
      return res.status(400).json({
        error: "User already exists",
      });
    }

    // create user
    const user = await UserModel.create({
      name: name,
      email: username,
      password: password,
    });

    res.status(201).json({
      message: "User created successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

/* -------------------- SERVER START -------------------- */
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
