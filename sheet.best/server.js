const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

require("dotenv").config()
const app = express();

const PORT = process.env.PORT
const URL = process.env.URL

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.js", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.post("/", (req, res) => {
  const x = req.body

  axios({
    method: 'post',
    url: URL,
    data: x
  }).then(() => {
    res.send("ok")
  }).catch((err) => {
    console.log(err)
  })
});

app.get("/thing", (req, res) => {

  axios.get(URL).then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log(err)
    res.status(400);
  })

});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});