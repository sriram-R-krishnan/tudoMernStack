const express = require('express');
const connectDB = require('./db/dbconnect');
const app = express();
require("dotenv").config()
const port = process.env.port;
let dbKey = process.env.dbKey
const authRouter = require('./routes/authRoute');


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello App!');
});

app.use('/',authRouter)

app.listen(port,async () => {
  await connectDB(dbKey)
  console.log(`app is running in ${port}`);
});