const mongoose = require("mongoose");

const taskGroup = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            dropDups: true
        }
    },
    {
        timestamps: true,
    }
)


module.exports = mongoose.model("Category", taskGroup);