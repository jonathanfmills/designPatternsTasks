var should = require('should'),
    sinon = require('sinon'),
    chalk = require('chalk'),
    gulpMocha = require('gulp-mocha');

describe('Index Controller Tests:', function () {
    describe('get', function () {
        it('should include tasks on the response', function () {
            var indexController =
                require('../../controllers/indexControllers')();

            var req = {};
            var res = {render: sinon.spy()};

            indexController.get(req, res);

            console.log(chalk.red(res.render.getCall(0).args[1].tasks[0]));
            should.exist(res.render.getCall(0).args[1].tasks[0].name);
        });
    });
});