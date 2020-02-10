const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const items = require('./routes/api/items');



mongoose
.connect(db, { useNewUrlParser: true ,useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected!'))
.catch(error => console.log(error));

app.use(bodyParser.json())

app.use('/api/items', items);

module.exports = app;