const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const mongoos = require("mongoose");
const userdataModle = require("./Model/user");

app.use(express.json());
app.use(cors());

//Connect database

mongoos
  .connect("mongodb://localhost:27017/TO-DO")
  .then(() => {
    console.log("DataBase Connected Successfully !");
  })
  .catch((error) => {
    console.log("Error occured =>", error);
  });

app.get("/", (req, res) => {
  res.send("server running !");
});

app.post("/singup", (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async function (err, hash) {
      const user = await userdataModle.create({
        username,
        email,
        password: hash,
      });
      res.send("Account Created Successfully");
      console.log(user);
    });
  });
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await userdataModle.findOne({ email });
    if (!user) return res.status(404).send("User not found");
    // Verify Password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send(false);
    // Generate JWT
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      "aPq9!dS@3fT8zX1&mE7o^kP4#tY2wQ5"
      ,
      { expiresIn: "1h" } // Token valid for 1 hour
    );
    // res.cookie("token",token)
    console.log("Generated Token:",token)
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send(false);
  }
});

app.listen(3001, () => {
  console.log("Server Start At port 3001");
});
