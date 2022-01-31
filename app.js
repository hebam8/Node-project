const express = require("express");
const { userRouters } = require("./routes/users.routes");
const app = express();
const connect = require("./db/connect");

//midellware
app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.use(userRouters);

const start = async () => {
  try {
    await connect("mongodb://localhost:27017/hebaproject");
    app.listen(process.env.PORT || 3000, () => {
      console.log("connect to listeing...");
    });
  } catch (error) {
    console.log("error:", error.message);
  }
};
start();
