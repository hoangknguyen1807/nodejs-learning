import express from 'express';
const app = express();
const PORT = 3000;

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

app.get('*', (req, res) => { 
	res.redirect('/error')
});

app.listen(PORT, function (err) {
	if (err) {
    console.log(err);
  }
	console.log("Server listening on PORT", PORT);
});
