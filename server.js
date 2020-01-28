const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.use(cors());

app.get("/events", async (req, res, next) => {
  axios
    .get(
      "http://open-api.myhelsinki.fi/v1/events/?distance_filter=60.1699%2C24.9384%2C10&language_filter=en&limit=100"
    )
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.get("/activities", async (req, res, next) => {
  axios
    .get(
      "http://open-api.myhelsinki.fi/v1/activities/?distance_filter=60.1699%2C24.9384%2C10&language_filter=en&limit=50"
    )
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.get("/places", async (req, res, next) => {
  axios
    .get(
      "http://open-api.myhelsinki.fi/v1/places/?tags_search=RESTAURANTS%20%26%20CAFES&distance_filter=60.1699%2C24.9384%2C5&language_filter=en&limit=100"
    )
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", index.html));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
