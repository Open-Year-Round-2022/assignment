import express from "express";
const app = express();
import compression from "compression";
import mysql from "./js/database.js";
import template from "./js/template.js";
import path from 'path';
import bodyPaser from 'body-parser';
import session from 'express-session';
import MySQLStoreSession from 'express-mysql-session';
const MySQLStore = MySQLStoreSession(session);

const __dirname = path.resolve();
const db = mysql.init();
mysql.conn(db);
const sessionStore = new MySQLStore(mysql.store());

app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use(compression());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(
    session({
        secret: "secret key",
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    })
);

app.post('/instagram/mainPage', (req, res) => {
    const userInfo = req.body;

    db.query('SELECT * FROM Users WHERE userid = ? and passwords = ?', [userInfo.userid, userInfo.password], (error, userdata) => {
        if (userdata.length == 0) {
            res.redirect('/instagram/loginPage');
        }
        else {
            db.query('SELECT * FROM Users, Post WHERE Users.userid = Post.userid ORDER BY Post.id', (error, data) => {
                if (error) {
                    throw error;
                }

                let feed_post = "";
                let i = 0;
                while (i < data.length) {
                    feed_post += template.feed_post(data[i].userid, data[i].profileImg, data[i].name, data[i].img, data[i].text, data[i].likes);
                    i += 1;
                }
                let html = template.HTML(feed_post, userdata[0].profileImg, userdata[0].userid);

                req.session.userid = userdata[0].userid;
                req.session.save((error) => {
                    if (error) {
                        throw error;
                    }
                    res.send(html);
                });
            });
        }
    })
});

app.get('/instagram/loginPage', (req, res) => {
    res.sendFile(__dirname + '/html/loginPage.html');
});

app.get('/instagram/createAccountPage', (req, res) => {
    res.sendFile(__dirname + '/html/createAccountPage.html');
});

app.post('/instagram/account/create', (req, res) => {
    const userInfo = req.body;
    db.query('INSERT INTO Users VALUES(?, ?, ?, ?);', [userInfo.userid, userInfo.password, userInfo.name, ""], (error, data) => {
        if (error) {
            throw error;
        }
    });
    res.redirect('/instagram/loginPage');
});

app.post('/instagram/hartclick', (req, res) => {
    const post = req.body;
    if (post.status === 1) {
        db.query('UPDATE Post SET likes= likes+1 WHERE id = ?', [post.id], (error, data) => {
            if (error) {
                throw error;
            }
        })
    }
    else if (post.status === 0) {
        db.query('UPDATE Post SET likes= likes-1 WHERE id = ?', [post.id], (error, data) => {
            if (error) {
                throw error;
            }
        })
    }
    else {
        console.log(error);
    }

    let info = {};

    db.query('SELECT * FROM Post WHERE id = ?', [post.id], (error, data) => {
        if (error) {
            throw error;
        }
        info['likes'] = data[0].likes;
        res.json(info);
    });
});

app.post('/instagram/feed_comment', (req, res) => {
    const post = req.body;
    db.query('SELECT * FROM Comment, Users WHERE postId = ? and Comment.userid = Users.userid', [post.postId], (error, data) => {
        if (error) {
            throw error;
        }

        if (data.length > 0) {
            data[0].sessionId = req.session.userid;
        }
        res.json(data);
    });
});

app.post('/instagram/feed_comment/add', (req, res) => {
    const post = req.body;
    db.query('INSERT INTO Comment VALUES(?, ?, ?, ?)', [post.postId, post.text, req.session.userid, post.data_num], (error, data) => {
        if (error) {
            throw error;
        }
    });
    db.query('SELECT * FROM Comment, Users WHERE postId = ? and Comment.userid = Users.userid', [post.postId], (error, data) => {
        if (error) {
            throw error;
        }
        if (data.length > 0) {
            data[0].sessionId = req.session.userid;
        }
        res.json(data);
    });
});

app.post('/instagram/feed_comment/delete', (req, res) => {
    const post = req.body;
    db.query('DELETE FROM Comment WHERE data_num = ?', [post.data_num], (error, data) => {
        if (error) {
            throw error;
        }
    });
    db.query('SELECT * FROM Comment, Users WHERE postId = ? and Comment.userid = Users.userid', [post.postId], (error, data) => {
        if (error) {
            throw error;
        }
        if (data.length > 0) {
            data[0].sessionId = req.session.userid;
        }
        res.json(data);
    });
});

app.listen(3000);