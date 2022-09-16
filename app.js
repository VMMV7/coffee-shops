const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.route.js");
const coffeeShopRouter = require("./src/routes/coffeeShop.route.js");
const fakeData = require('./src/routes/fakeData')

mongoose.connect("mongodb://localhost:27017/coffeeshops");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// await fakeData()

app.use("/users", userRouter);
app.use("/coffeeShops", coffeeShopRouter);

app.listen(4000, () => {
  console.log("server up listen to port 4000");
});
