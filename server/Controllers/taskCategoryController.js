const taskGroupModel = require("../Models/taskCategoryModel");

const addNewGroup = async (req, res) => {
    try {
        const newGroup = await taskGroupModel.create(req.body);
        res.status(200).json({
            success: true,
            message: 'New task group created',
            newGroup
        })
        console.log("action complete successfully...")
    } catch (error) {
        res.status(400).send('operation failed' + error);
        console.log("couldn't complete action...")
    }

    // TODO: catch specific errors in your code like the duplicates goal category titles
}



module.exports =
{
    addNewGroup,
}
