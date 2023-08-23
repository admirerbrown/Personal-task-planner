const express = require("express");
const taskController = require("../Controllers/taskController");

const router = express.Router();

router.post("/add_task", taskController.addTask);
router.delete("/delete_task/:_id", taskController.deleteTask);
router.get("/getAllTasks", taskController.getTasks);
router.put("/update_task_status/:_id", taskController.updateTaskStatus);


module.exports = router;