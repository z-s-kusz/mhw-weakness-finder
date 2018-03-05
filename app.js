const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const monsters = require('./routes/monsters');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static(path.join(__dirname, './dist')));

// Handle index file separately
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

// routes
app.use('/monsters', monsters);

// start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
