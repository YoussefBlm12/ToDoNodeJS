const express = require('express');

const {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const taskRout = express.Router();

taskRout.get("/",getAllTasks);
taskRout.post("/",addTask);
taskRout.put("/:id",updateTask);
taskRout.delete("/:id",deleteTask);

module.exports = {
    taskRout
};