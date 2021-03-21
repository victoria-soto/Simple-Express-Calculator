const express = require("express");
const app = express();

// parse info receieved from get requests
const bodyParser = require("body-parser");

// grab info from html form w/urlencoded method
// set encoded to true allowing the posting of nested objects
app.use(bodyParser.urlencoded({
  extended: true
}));

// send get request
app.get("/", function(req, res) {
  // send file to current directory of file in browser
  res.sendFile(__dirname + "/index.html");
});

// handle post requests to server at root
app.post("/", function(req, res) {

  // logs request of form body sent
  //  console.log(req.body);
  var result = Number(req.body.num1) + Number(req.body.num2);
  res.send("The sum of " + req.body.num1 + " and " + req.body.num2 + " is " + result);
});

// make server on port 3000
app.listen("3000", function() {
  console.log("Server is running on port 3000.");
});
