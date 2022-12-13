const express = require("express");
const app = express();
const cors = require("cors");
const { connect, mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const userRegister = require("./Routes/UserRegister");
app.use("/auth", userRegister);
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
const MONGOURL = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.send("hey home");
});
app.listen(PORT, async () => {
  await connect(MONGOURL);

  console.log("server started");
});
