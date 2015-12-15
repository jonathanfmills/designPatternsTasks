var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/taskController')();
/* GET home page. */
router.route('/')
    .get(ctrl.getTaskList)
    .post(ctrl.postTask);
    

router.route('/:id')
    .patch(ctrl.patchTask)
    .put(ctrl.putTask);
module.exports = router;