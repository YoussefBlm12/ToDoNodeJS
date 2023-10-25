const mongoose = require('mongoose');

const taskShema = mongoose.Schema({
    title: {
        type: String,
        required: true,
       // minLength: 4,
        maxLength: 150
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    repeat: {
        type: String,
        required: true,
    },
    color: {
        type: Number,
        required: true,
    },
},{
    timestamps: true
});

const Task = mongoose.model('Tasks', taskShema);

module.exports = Task ;