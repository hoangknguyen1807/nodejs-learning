import express from 'express';

import axios from 'axios';

import { createHmac } from 'crypto';

(await import ('dotenv')).config();

const app = express();
const PORT = 3000;

const ftxAPI = axios.create({
  baseURL: 'https://ftx.us/api'
});
// Alter defaults after instance has been created
ftxAPI.defaults.headers.common['FTXUS-KEY'] = process.env.FTXUS_API_KEY || '';
const FTXUS_API_SECRET = process.env.FTXUS_API_SECRET || '';


// Without middleware
app.get('/', function (req, res) {

	// Equivalent to res.status(200).send('OK')
	res.sendStatus(200);
  // res.status(200).send({msg:'OK'});
});

app.get('/dmcs', function (req, res) {
	res.status(200).send({'msg': 'DMCS'});
})

app.get('/error', (req, res) => {
	res.sendStatus(400);
});

app.get('/ftx/markets', (req, res) => {
	const ts = (new Date()).valueOf();
	const method = 'GET';
	const path = '/markets';
	const hmac = createHmac('sha256', FTXUS_API_SECRET);
	hmac.update(ts + method + path);
	const signature = hmac.digest('hex');

	ftxAPI.get(path, {
		headers: {
			'FTXUS-TS': ts,
			'FTXUS-SIGN': signature
		}
	}).then((resp) => {
		res.status(200).send(resp.data);
	}, (err) => {
		console.log(err);
		res.status(400).send({err: err + ''});
	});
});

app.get('*', (req, res) => { 
	res.redirect('/error')
});

app.listen(PORT, function (err) {
	if (err) {
    console.log(err);
  }
	console.log("Server listening on PORT", PORT);
});
