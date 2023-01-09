const express = require('express');
const app = express();
require("dotenv").config()
const port = process.env.port;

app.get('/', (req, res) => {
  res.send('Hello App!');
});

app.listen(port, () => {
  console.log(`app is running in ${port}`);
});