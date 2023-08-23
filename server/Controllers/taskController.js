const taskModel = require("../Models/taskModel");
const goalModel = require("../Models/goalsModel")

const getTasks = async (req, res) => {
    const tasks = await taskModel.find({})

    try {
        if (tasks) {
            res.status(200).json({
                success: true,
                message: "showing a list of all your tasks",
                tasks
            })
        } else {
            res.status(200).json({
                success: true,
                message: "No tasks available, please add some",
                tasks
            });
        }
    } catch (error) {
        res.status(400).send("error fetching your saved tasks", error);
    }
}

const addTask = async (req, res) => {
    try {
        const { goal_id } = req.body
        const goalCheck = await goalModel.findById(goal_id);

        if (goalCheck) {
            const newTask = await taskModel.create(req.body);
            res.status(200).json({
                success: true,
                message: 'New task created',
                newTask
            })
            console.log("action complete successfully...");
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request.',
            error: error.message,
        });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { _id } = req.params;
        const task = await taskModel.findByIdAndDelete(_id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "task not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "task successfully deleted"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request',
            error: error.message,
        });
    }
}

const updateTaskStatus = async (req, res) => {
    try {
        const { _id } = req.params
        const taskToUpdate = await taskModel.findById(_id);

        if (taskToUpdate) {
            const { status } = req.body;
            taskToUpdate.status = status;
            await taskToUpdate.save();

            return res.status(200).json({
                success: true,
                message: "task status has been updated successfully",
                taskToUpdate
            })
        }
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
    getTasks,
    addTask,
    deleteTask,
    updateTaskStatus
}