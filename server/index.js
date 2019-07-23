const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const items = require('./db/routes/items');

const port = process.env.PORT || 3000;
const db = mongoose.connection;
const connection = process.env.MONGODB_URI;
const app = express();

mongoose.connect(connection, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected'));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../client'));

app.use('/items', items);

app.listen(port, () => console.log('success'));
