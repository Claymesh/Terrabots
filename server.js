require('dotenv').config()
const path = require("path");
const express = require("express");
const cors = require('cors');



const app = express();
const PORT = process.env.PORT;

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'client')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));


}

const routes = require('./routes');
app.use(routes)



app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
})