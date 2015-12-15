var indexController = function () {
    var get = function (req, res, next) {
        res.render('index', {
            title: 'Express',
            tasks: [{
                name: 'Task 1'
            }, {
                name: 'Task 2',
                completed: true
            }]
        });
    };

    return {
        get: get
    };
};

module.exports = indexController;