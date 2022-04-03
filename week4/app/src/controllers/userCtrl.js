const connection = require('../../dbConfig.js');

const userCtrl = {
  getUsers: async (req, res) => {
    connection.query('SELECT * FROM user', (error, rows) => {
      if (error) throw error;

      res.send(rows);

    });
  }
}

module.exports = userCtrl;