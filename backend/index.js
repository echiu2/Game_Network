const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const { sync, User } = require("../database");

// Allow app to parse json requests and files
app.use(express.json());
app.use(express.static('public'));

// GET request from index.html file
app.get("/", (req, res) => {
  try{
      res.sendFile(path.join(__dirname, "../index.html"));
  }
  catch(error){
    console.log(error)
  }
});


// sync().then(() => {
//   // Listens to the port to allow server to run
//   app.listen(port, function () {
//     console.log(`listening to ${port}`);
//   });
// });

app.listen(port, function () {
  console.log(`listening to ${port}`);
});