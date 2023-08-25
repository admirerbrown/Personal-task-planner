const goalsModel = require("../Models/goalsModel");
const taskCategoryModel = require("../Models/taskCategoryModel");
const taskModel = require("../Models/taskModel");

const getGoals = async (req, res) => {
    try {
        const goals = await goalsModel.find({}).populate('tasks'); // Populate the 'tasks' field

        if (goals.length > 0) {
            goals.forEach((goal) => {
                const totalTasksCount = goal.tasks.length;
                let completedTasksCount = 0;

                if (totalTasksCount > 0) {
                    goal.tasks.forEach((task) => {
                        if (task.status === "completed") {
                            completedTasksCount++;
                        }
                    });

                    goal.progress = Math.floor((completedTasksCount / totalTasksCount) * 100);
                    // TODO: update the progress in the database when task progress is update goal status is not updated in db but upon request
                }
            });

            res.status(200).json({
                success: true,
                message: "Showing a list of all your goals",
                goals
            });
        } else {
            res.status(200).json({
                success: true,
                message: "No goals available, please add some",
                goals: []
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching your saved goals",
            error: error.message
        });
    }
};

module.exports = {
    getGoals
};



const addGoal = async (req, res) => {
    try {
        const { category_id } = req.body
        const groupCheck = await taskCategoryModel.findById(category_id);

        if (groupCheck) {
            const newGoal = await goalsModel.create(req.body);
            res.status(200).json({
                success: true,
                message: 'New goal created',
                newGoal
            })
            console.log("action complete successfully...");
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request. ensure to add a goal group',
            error: error.message,
        });
    }
}


const deleteGoal = async (req, res) => {
    try {
        const { _id } = req.params;
        const goal = await goalsModel.findByIdAndDelete(_id);

        if (!goal) {
            return res.status(404).json({
                success: false,
                message: "Goal not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "goal successfully deleted"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request',
            error: error.message,
        });
    }
}

module.exports =
{
    addGoal,
    deleteGoal,
    getGoals
}