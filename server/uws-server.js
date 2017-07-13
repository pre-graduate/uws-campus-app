
const express = require("express");
const app = express();
const fs = require("fs");

app.post('/getContacts', (req, res) => {
  fs.readFile("json/contacts.json", "utf8", function(err, data) {
    res.json(JSON.parse(data));
  })
});

app.post('/getNews', (req, res) => {
  fs.readFile("json/news.json", 'utf8', function(err, data) {
    res.json(JSON.parse(data));
  })
})

const server = app.listen(3005, () => {
  console.log(`UWS Server Online ${JSON.stringify(server.address())}`);
});
