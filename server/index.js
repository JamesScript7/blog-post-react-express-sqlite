'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

var Sequelize = require('sequelize');
var databaseURL = 'sqlite://dev.sqlite3';
var sequelize = new Sequelize(databaseURL);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

var BlogPost = sequelize.define('blog_post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

app.post('/submitForm', function(req,res) {

	BlogPost.create({
    title: req.body.title,
    body: req.body.body
  })
  .then(function(row) {
    res.json(row);
  })

});

app.get('/getAll', function(req,res) {

	BlogPost.findAll({}).then(function(results) {
			res.json({ post: results });
		});

});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

sequelize.sync().then(function(){
	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}!`);
	});
}).catch(function(err){
  console.error(err);
});