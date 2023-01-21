const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "employeeDB",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// const sql =
//     "INSERT INTO employee_performance (name,performance,date) values ('Sally', 34, '2022-06-15')";
//   db.query(sql, (err, result) => {
//     res.send("hello world there db");
//   });

// app.get("/", (req, res) => {
//   res.send("hello world there!!");
// });

app.get("/api/employees", (req, res) => {
  const sqlSelect =
    "SELECT id,name,performance,DATE_FORMAT(date,'%c/%d/%Y') as date FROM employee_performance ORDER BY performance DESC";

  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.get("/api/employeesByName", (req, res) => {
  const sqlSelect2 =
    "SELECT id,name,performance,DATE_FORMAT(date,'%c/%d/%Y') as date  FROM employee_performance ORDER BY name";
  db.query(sqlSelect2, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.get("/api/employeesByDate", (req, res) => {
  const sqlSelect3 =
    "SELECT id,name,performance,DATE_FORMAT(date,'%c/%d/%Y')  FROM employee_performance ORDER BY date";
  db.query(sqlSelect3, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.listen(3002, () => {
  console.log("running on port 3002");
});
