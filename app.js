const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static file
app.use(express.static(path.join(__dirname, './dist/index.html')));
