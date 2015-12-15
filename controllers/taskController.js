var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var taskController = function () {

    var getTaskList = function (req, res, next) {
        var url =
            'mongodb://localhost:27017/taskDb';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('tasks');

            collection.find({}).toArray(
                function (err, results) {
                    res.json(results);
                }
            );
        });
    };

    var postTask = function (req, res, next) {
        var url =
            'mongodb://localhost:27017/taskDb';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('tasks');

            collection.insertOne(req.body,
                function (err, results) {
                    console.log(results.ops[0]);
                    res.json(results.ops[0]);
                }
            );
        });

    };

    var patchTask = function (req, res, next) {
        var url =
            'mongodb://localhost:27017/taskDb';
        var id = new objectId(req.params.id);
        console.log('Hi from patchtask');
        mongodb.connect(url, function (err, db) {
            console.log('connect: ' + err);
            var collection = db.collection('tasks');

            collection.updateOne({
                    _id: id
                }, {
                    $set: {
                        completed: req.body.completed
                    }
                },
                function (err, results) {
                    console.log(results);
                    res.json(results);
                }


            );
            //res.send(200);
        });
    };

    var putTask = function (req, res, next) {
        try {
            var url =
                'mongodb://localhost:27017/taskDb';
            var id = new objectId(req.params.id);
            var task = req.body;
            console.log('Hi from puttask:' + JSON.stringify(task));
            delete task._id;
            mongodb.connect(url, function (err, db) {
                console.log('connect: ' + err);
                var collection = db.collection('tasks');

                collection.updateOne({
                        _id: id
                    }, task,
                    function (err, results) {
                        console.log(results);
                        res.json(results);
                    }


                );
            })
        } catch (e) {
            console.log(e);
            throw e;
        }
    };
    return {
        getTaskList: getTaskList,
        postTask: postTask,
        patchTask: patchTask,
        putTask: putTask
    };
};

module.exports = taskController;