var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var config = require('./config.js'); //Will be used to store server user config files

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

//Test route for homepage
app.use(express.static(__dirname+'/FrontEnd'))
app.use(require('./routes/orgs'));
//app.use(require('./routes/events'));
//app.use(require('./routes/users'));


//put more routes here

//Register Routes
//app.use(express.static(__dirname + '/FrontEnd'));
app.use('/', router);

app.listen(port);
console.log('FreeLabor API Serving on port ' + port);
