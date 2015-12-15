var Task = function (data) {
    this._id = data._id;
    this.name = data.name;
    this.description = data.description;
    this.completed = (data.completed) ? true : false;
    this.assignedTo = data.assignedTo;

}

Task.prototype.save = function () {
    
};