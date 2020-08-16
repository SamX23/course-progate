const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.render('hi.ejs');
});

app.listen(3000);