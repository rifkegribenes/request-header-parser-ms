const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userAgent = require('express-useragent');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(userAgent.express());

const api = '/api/whoami';
app.get(api, (req, res, next) => {
	const language = req.acceptsLanguages();
	const software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`;
	const ipaddress = req.ip;

	res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});