const taskGroupModel = require("../Models/taskCategoryModel");

const addNewGroup = async (req, res) => {
    try {
        const newGroup = await taskGroupModel.create(req.body);
        res.status(200).json({
            success: true,
            message: 'New task group created',
            newGroup
        })
        console.log("action complete successfully...");
    } catch (error) {
        if (error.message.includes("E11000 duplicate key error")) {
            res.status(400).send("Please enter a different category name");
        } else {
            res.status(400).send('operation failed' + error);
            console.log("couldn't complete action...");
        }
    }

}

const deleteGroup = async (req, res) => {
    try {
        const { _id } = req.params;
        const group = await taskGroupModel.findByIdAndDelete(_id);

        if (!group) {
            return res.status(404).json({
                success: false,
                message: "Group not found"
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
    addNewGroup,
    deleteGroup
}
