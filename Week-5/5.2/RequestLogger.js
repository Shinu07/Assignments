/*
Assignment #2 - Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console.
*/

const express = require("express");

const app = express();

function requestLogger(req, res, next) {
  const currentTime = new Date();
  console.log(req.method);
  console.log(`${req.protocol}://${req.get("host")}${req.url}`);
//req.protocol(http)://req.get.host(localhost:3000/req.url(signup))

  console.log(currentTime);

  next();
}

app.use(requestLogger);

//create a router that respond to get request
app.get("*", (req, res) => {
  res.send("Hi Started!");
});

// create a route that responds to post requests

app.post("*", (req, res) => {
  res.send("Hello i;'m getting the post request succesfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
