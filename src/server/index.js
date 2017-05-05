//CONSTS

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
//API ROUTE
const hotelsApi = require('./hotel-result/hotel-result-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Project folder

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/../client/index.html')));
app.use('/api/hotels', hotelsApi);

//Static Routes

app.use('/src', express.static(path.join(__dirname, './../../src')));
app.use('/build', express.static(path.join(__dirname, './../../build')));

//Listening PORT

app.listen(3000);
console.log('App listening on port 3000');
