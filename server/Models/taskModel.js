const mongoose = require("mongoose");
const goalsModel = require("./goalsModel")

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        estimatedTime: {
            type: String,
            required: true,
        },
        goal_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: "not started"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Task", taskSchema);