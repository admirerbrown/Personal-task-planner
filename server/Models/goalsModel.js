const mongoose = require('mongoose');
const taskModel = require('./taskModel')

const goalSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category_id: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        progress:{
            type: Number,
            default: 0,
        },
        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: taskModel, // Reference to the 'Task' model
        }]
    },
    {
        timestamps: true,
    }
);



module.exports = mongoose.model("Goal", goalSchema);