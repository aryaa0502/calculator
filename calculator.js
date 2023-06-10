const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result;
  var op = req.body.submit;

  switch (op) {

    case "add":
      result = num1 + num2;
      res.write(`<div style ="
    width: 30%;
    background-color: papayawhip;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 30px;
    border: 5px inset blueviolet;
    margin:300px auto;
    font-size: large;">The sum is: ${result}</div>`);
      break;

    case "subtract":
      result = num1 - num2;
      res.write(`<div style ="
    width: 30%;
    background-color: papayawhip;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 30px;
    border: 5px inset blueviolet;
    margin:300px auto;
    font-size: large;">The difference is: ${result}</div>`);
      break;

    case "multiply":
      result = num1 * num2;
      res.write(`<div style ="
    width: 30%;
    background-color: papayawhip;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 30px;
    border: 5px inset blueviolet;
    margin:300px auto;
    font-size: large;">The product is: ${result}</div>`);
      break;

    case "divide":
      result = num1 / num2;
      res.write(`<div style ="
    width: 30%;
    background-color: papayawhip;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 30px;
    border: 5px inset blueviolet;
    margin:300px auto;
    font-size: large;">The quotient is: ${result}</div>`);
      break;
  }

  res.send();
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
