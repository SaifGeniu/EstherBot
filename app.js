'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index', {
        appToken: process.env.0z61626rc02edplg48augov7c
    });
});

module.exports = app;
