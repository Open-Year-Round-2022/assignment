const express = require('express');
const app = express();
const loginPage = require('./js/loginPage.js');
const mainPage = require('./js/mainPage.js');
const compression = require('compression');
const fs = require('fs');
const { response } = require('express');

app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(compression());

app.post('/instagram/login_process', (req, res) => {
    res.redirect('/instagram/mainPage');
})

app.get('/instagram/loginPage', (req, res) => {
    res.send(loginPage.HTML());
});

app.get('/instagram/mainPage', (req, res) => {
    res.send(mainPage.HTML());
});

app.listen(3000);