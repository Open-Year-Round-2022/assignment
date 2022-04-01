var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'instagramclonecoding',
    password: 'instagramclonecoding',
    database: 'instagramclonecoding'
});

connection.connect();

let query1 = 'SELECT * FROM Users WHERE userid = "62hoon99";';
let query2 = 'SELECT * FROM Post;';

connection.query('SELECT * FROM Users, Post WHERE Users.userid = Post.userid', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data);
});

connection.end();