const express = require("express");
const goalController = require("../Controllers/goalsController");

const router = express.Router();

router.post("/new_goal", goalController.addGoal);
router.delete("/delete_goal/:_id", goalController.deleteGoal);
router.get("/fetch_goals", goalController.getGoals);



module.exports = router;