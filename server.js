var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var multer     = require('multer');
var morgan     = require('morgan');
var session    = require('express-session');
var path       = require('path');
var config     = require('./config.js'); //prod sql auth will go here
var SessionDB  = require('express-mysql-session')(session);

var app        = express();
var router = express.Router();
var port = process.env.PORT || 8080;

/*****************MySQL Connection for Sessions****************/
var sessionDBConf = {
  host: 'localhost',
  port: 3306,
  user: config.mysql_local.user_name,
  password: config.mysql_local.password,
  database: 'freelabor',// database/schema name
  checkExpirationInterval: 900000,//Interval to clear expired sessions (ms).
  expiration: 86400000,// maximum age of a valid session (ms)
  createDatabaseTable: true,
  connectionLimit: 1,// Num connections when creating a connection pool
  schema: {
    tableName: 'Session',
    columnNames: {
      session_id: 'idSession',
      expires: 'expiresSession',
      data: 'idUser'//Datatype is currently TEST, should be varchar?
    }
  }
};
var sessionStore = new SessionDB(sessionDBConf);

/***********************MySQL Connection***********************/
var connection = mysql.createConnection({
  host     : config.mysql_local.host,
  user     : config.mysql_local.user_name,
  password : config.mysql_local.password,
  database : config.mysql_local.schema
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

/***********************Cloudinary Config***********************/
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.key,
  api_secret: config.cloudinary.secret
});

/***********************Input Handlers***********************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/***************************Routes***************************/
app.all('*', function(request, response, next){
  request.db = connection;
  request.ss = sessionStore;
  request.cc = coudinary;
  next();
});
// chould point to FrontEnd/public
app.use(express.static(path.join(__dirname,'FrontEnd')));
app.use(require('./routes/users'));
app.use(require('./routes/orgs'));
app.use(require('./routes/events'));

app.use('/',function(req,res){
  res.sendfile('index.html');
});

/***************************Startup***************************/
app.listen(port);
console.log('FreeLabor API Serving on port ' + port);