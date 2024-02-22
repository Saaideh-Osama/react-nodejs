const data = {
  name: "John Doe",
  age: 25,
  email: "jhonDoe@gmail.com",
};
const prices = { price1: 100, price2: 200, price3: 300, price4: 400 };

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server!");
});
app.get("/getdata", (req, res) => {
  res.json(data);
});
app.get("/getprice", (req, res) => {
  res.json(prices);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
