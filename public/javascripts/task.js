(function () {
    var app = angular.module('taskManager');

    var taskFactory = function ($http) {
        var task = function (data) {
            this._id = data._id;
            this.name = data.name;
            this.description = data.description;
            this.completed = (data.completed) ? true : false;
            this.assignedTo = data.assignedTo;

        }

        function loadData(results){
            console.log(this);
            console.log('Data Loaded: ' + JSON.stringify(results.data));
            for (var prop in results.data) {
                this[prop] = results.data[prop];
            }
        }
        task.prototype.save = function () {
            console.log(this.name + ' saving');
            if (this._id) {
                $http.put('/tasks/' + this._id, this)
                    .then(loadData.bind(this));
            } else {
                $http.post('/tasks', this)
                    .then(loadData.bind(this));
            }
        }
        task.prototype.toggleStatus = function () {
            this.completed = !this.completed;
            console.log('completing ' + this.name);
            this.save();
        }

        return task;
    }

    app.factory('Task', taskFactory);
}())