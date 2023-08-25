const taskModel = require("../Models/taskModel");

const tracker = async(goal_id) =>{
    //find all related tasks that are completed
    const relatedTasks = await taskModel.find({})
    // filter all completed tasks whose goal id === goal_id
    relatedTasks.filter((task)=>{
         if(task.status === 'completed'){
            return task
         }
    })
    
}


module.exports = {
    tracker
}