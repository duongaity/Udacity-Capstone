require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const errorHandler = require('./src/middlewares/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/api/todos', require('./src/controllers/todo.controller'));

// global error handler
app.use(errorHandler);

// parses the text as JSON and exposes the resulting object on req.body
app.use(bodyParser.json());

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
