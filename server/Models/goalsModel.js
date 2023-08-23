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
        // progress:{
        //     type: Number,
        //     default:0
        // }
        
    },

    {
        timestamps: true,
    }
)


module.exports = mongoose.model("Goal", goalSchema);