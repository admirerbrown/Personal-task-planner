const goalsModel = require("../Models/goalsModel");
const taskCategoryModel = require("../Models/taskCategoryModel");



const getGoals = async (req, res) => {
    const goals = await goalsModel.find({})

    try {
        if (goals) {
            res.status(200).json({
                success: true,
                message: "showing a list of all your goals",
                goals
            })
        } else {
            res.status(200).json({
                success: true,
                message: "No goals available, please add some",
                goals
            });
        }
    } catch (error) {
        res.status(400).send("error fetching your saved goals", error);
    }
}

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
            message: "operation successful"
        })

    } catch (error) {
        res.status(400).send('operation failed' + error);
        console.log("couldn't complete action...");
    }
}

module.exports =
{
    addGoal,
    deleteGoal,
    getGoals
}