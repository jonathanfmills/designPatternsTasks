(function () {
    var app = angular.module('taskManager');

    var taskController = function ($http, Task) {
        var editing = -1;
        var ctrl = this;
        ctrl.newTask = {};
        var onGetTasks = function(results){
            ctrl.tasks = [];
            results.data.forEach(function (item) {
                console.log(item.name);
                ctrl.tasks.push(new Task(item));
            });
            console.log(ctrl.tasks);
            //ctrl.tasks = results.data;
        }   
        var onError = function(err){
            console.log('hi from error');
            console.log(err);
        }
        ctrl.tasks=[];
        
        $http.get('/tasks').then(onGetTasks, onError)
     
        ctrl.checked = function (id) {
            console.log('checked:' + id);
            ctrl.tasks[id].toggleStatus();
        };
        ctrl.createTask = function(){
            console.log('createTask');
            var newTask = new Task(ctrl.newTask);
            ctrl.tasks.push(newTask);
            newTask.save();
        }
        
        ctrl.edit = function(i){
            if(editing === i){
                editing = -1;
            } else {
                editing = i;
            }
            
        }
        
        ctrl.editing = function(i){
            return i === editing
        }
        return ctrl;
    };
    
    

    app.controller('taskCtrl', taskController);
}());

