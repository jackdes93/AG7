const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

app.use(cors({
'Access-Control-Allow-Headers' : 'Content-Type, Authorization'
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// SETTING MONGODB 
const CONNECT_STRING = process.env.DB_CONNECTION + '://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME;
mongoose.connect(CONNECT_STRING, {'useNewUrlParser': true, 'useCreateIndex' : true, useFindAndModify: false});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection ERROR !!!!'));
db.once('open', function() { console.log('Database connecting successfully !!!');});

// SETTING ROUTE
app.use('/api/v1', routes);
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// SETTING ERROR
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message
        }
    });
});


module.exports = app;