const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const db = require("../../database");


router.route('/').get((req, res) => { res.send('hi') });
router.route('/user').get(db.userCtrl.getUsers);

router.route('/post').get(db.postCtrl.getPosts);

router.route('/comment').get(db.commentCtrl.getComments);


module.exports = router;