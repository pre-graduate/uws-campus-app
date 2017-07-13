
const express = require("express");
const app = express();
const fs = require("fs");

const port = () => Number(process.argv.slice(-1)[0]);

app.post('/getContacts', (req, res) => {
  fs.readFile("json/contacts.json", "utf8", function(err, data) {
    res.json(JSON.parse(data));
  })
});

app.post('/getNews', (req, res) => {
  fs.readFile("json/news.json", 'utf8', function(err, data) {
    res.json(JSON.parse(data));
  })
});

app.get('/', (req, res) => {
  res.redirect('https://play.google.com/store/apps/details?hl=iw&id=com.uws.campus_app');
});

const server = app.listen(port(), () => {
  console.log(`UWS Server Online ${JSON.stringify(server.address())}`);
});
