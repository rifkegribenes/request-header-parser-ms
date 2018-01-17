const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userAgent = require('express-useragent');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(userAgent.express());

// return the user agent, ip address, and language at the api/whoami route
const api = '/api/whoami';
app.get(api, (req, res, next) => {
	const language = req.acceptsLanguages();
	const software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`;
	const ipaddress = req.ip;

	res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
})

// return the same info at the home route also because i don't feel like building a UI for this thing
app.get('/', (req, res) => {
  const language = req.acceptsLanguages();
	const software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`;
	const ipaddress = req.ip;

	res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
})
