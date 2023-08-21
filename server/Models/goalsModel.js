const mongoose = require('mongoose');

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
        status: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }
)


module.exports = mongoose.model("Goal", goalSchema);