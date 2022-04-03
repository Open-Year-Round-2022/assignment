const connection = require('./dbConfig');

const userCtrl = {
  getUsers: async (req, res) => {
    connection.query('SELECT * FROM user', (error, rows) => {
      if (error) throw error;

      res.send(rows);

    });
  }
}

const postCtrl = {
  getPosts: async (req, res) => {
    connection.query('SELECT * FROM post', (error, rows) => {
      if (error) throw error;

      res.send(rows);
    })
  }
}

const commentCtrl = {
  getComments: async (req, res) => {
    let postId = req.id;//게시물
    connection.query(`SELECT * FROM comment WHERE post_id =${postId}`, (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });


  }
}

module.exports = { userCtrl, postCtrl, commentCtrl };