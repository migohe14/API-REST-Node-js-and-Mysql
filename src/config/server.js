
const express = require('express');
const path = require('path')
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// Middlewares
app.use(express.json());

module.exports = app;