const output = {
  home: (req, res) => {
    res.render("main_page");
  },

  login: (req, res) => {
    res.render("login_page");
  },

};

const users = {
  id: ["minji", "mj"],
  password: ["1234", "0000"],
}

const process = {
  login: (req, res) => {

    const id = req.body.id;
    const password = req.body.password;

    const response = {};

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인 실패";

    return res.json(response);
  }
}


module.exports = {
  output,
  process
};