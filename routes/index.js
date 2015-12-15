var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/indexControllers')();
/* GET home page. */
router.get('/', ctrl.get);

module.exports = router;