const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main_page")
});

router.get("/login", (req, res) => {
  res.render("login_page")
})


module.exports = router;