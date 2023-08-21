const mongoose = require("mongoose");

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
            type: Number,
            required: true,
        },
        goal_id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)


module.exports = mongoose.model("Task", taskSchema);