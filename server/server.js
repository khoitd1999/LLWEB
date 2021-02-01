var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var tasks = require('./routers/tasks');
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api', tasks);

app.listen(port, () => {
    console.log('Server is starting on ' + port);
})