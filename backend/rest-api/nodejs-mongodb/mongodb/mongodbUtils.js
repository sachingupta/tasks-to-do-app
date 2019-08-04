const Task = require('./models/task');
const mongoose = require('mongoose');

module.exports = {
    getTasks: () => {
        return Task.find().exec();
     },
     addTask: (title, status) => {
        const task = new Task({
            _id: new mongoose.Types.ObjectId(),
            title: title,
            status: status || 'Active'
        });
    
        return task.save();
    },
     getTask: (id) => {
        return Task.findById(id)
        .exec();
    },
     updateTask: (id, title, status) => {
        const updateOps = {};
        if(title) {
            updateOps["title"] = title;
        }
        if(status) {
            updateOps["status"] = status;
        }
       return Task.update({_id: id}, { $set: updateOps })
        .exec();
    },
    deleteTask: (id) => {
    return  Task.remove({_id: id}).exec();
    }
}