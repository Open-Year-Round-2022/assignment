const express = require('express');
const app = express();
const loginPage = require('./js/loginPage.js');
const mainPage = require('./js/mainPage.js');
const compression = require('compression');
const fs = require('fs');
const { response } = require('express');

app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use(compression());

// app.post('/instagram/login_process', (req, res) => {
//     res.redirect('/instagram/mainPage');
// });

app.get('/instagram/loginPage', (req, res) => {
    // res.send(loginPage.HTML());
    res.sendFile(__dirname + '/html/loginPage.html');
});

app.post('/instagram/mainPage', (req, res) => {
    res.sendFile(__dirname + '/html/mainPage.html');
});

app.listen(3000);