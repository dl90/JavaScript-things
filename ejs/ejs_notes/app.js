const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
// In express theres a variable called _locals. _locals is a special object that stays accessible while express is running
// By default express does not set a "view engine"

app.get("/getData", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then(response => {
    // console.log(response);
    // res.send(JSON.parse(response));
  }).catch(err => {
    console.log(err)
  })
});

// Google sheets as a dummy database

app.get("/doesntwork", (req, res) => {
  let drinks = [
    { name: 'coffee1', sweetness: 1 },
    { name: 'coffee2', sweetness: 2 },
    { name: 'coffee3', sweetness: 3 }
  ]

  let tagline = "Your welcome"
  res.render("pages/index", { drinks, tagline })
});

app.listen(9000);