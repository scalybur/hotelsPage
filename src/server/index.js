//CONSTS

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Project folder

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/../client/index.html')));

//Static Routes

app.use('/src', express.static(path.join(__dirname, './../../src')));
app.use('/build', express.static(path.join(__dirname, './../../build')));

//Listening PORT

app.listen(3000);
console.log('App listening on port 3000');
