const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "157.245.59.56",
  user: "u6403022",
  password: "6403022",
  database: "u6403022_Project_IOT",
  port: 3366,
});

var app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    status: "ok",
    message: "Hello World",
  });
});

app.get("/count", function (req, res) {
  connection.query("SELECT * FROM iot_data", function (err, results) {
    console.log(results); //แสดงผลที่ console
    res.json(results); //ตอบกลับ request
  });
});

app.listen(5000, () => {
  console.log("Server is started.");
});
