const express = require("express");
const taskGroupController = require("../Controllers/taskCategoryController");

const router = express.Router();

router.post("/add_task_group", taskGroupController.addNewGroup);


module.exports = router;