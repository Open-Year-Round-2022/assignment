
const express = require('express')
const router = express.Router();
const ctrl = require("../controller/home");

router.get('/', ctrl.output.index);
router.get("/main", ctrl.output.main);
router.post('/main', ctrl.login);

module.exports = router;