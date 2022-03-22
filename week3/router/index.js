
const express = require('express')
const router = express.Router();
const ctrl = require("../controller/home");

router.get('/', ctrl.index);
router.post('/', ctrl.login);

module.exports = router;