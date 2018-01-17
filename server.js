// server.js

//init project
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userAgent = require('express-useragent');
const http = require('http');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(userAgent.express());

app.use(express.static('public'));

app.set('view engine', 'pug');

const api = '/api/whoami';
app.get(api, (req, res, next) => {
	const language = req.acceptsLanguages();
	const software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`;
	const ipaddress = req.ip;

	res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
})

// If it's not an api request, display the index page
app.get('*', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index.pug', {
    fullUrl: fullUrl,
    title: 'Request Header Parser Microservice'
  });
});

const server = http.createServer(app);
const port = process.env.PORT || '3000';
app.set('port', port);
server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});