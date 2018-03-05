const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const monsters = require('./routes/monsters');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let databaseURI;
// process.env.MONGODB_URI will only be defined if you are running on Heroku
if (process.env.MONGODB_URI !== undefined) {
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/monsters';
}

mongoose.connect(databaseURI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open ', databaseURI);
});
mongoose.connection.on('error', (err) => {
    console.log('Mongoose error connecting ', err);
});

// static files
app.use(express.static(path.join(__dirname, './dist')));

// Handle index file separately
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

// routes
app.use('/monsters', monsters);

// start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log('listening on port ', app.get('port'));
});
