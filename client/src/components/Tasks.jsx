const TaskBoard = () => {
  const tasks = [
    {
      _id: 1,
      title: "complete the frontend architecture of the app",
      status: "not-started",
    },
    {
      _id: 2,
      title: "complete the backend architecture of the app",
      status: "completed",
    },
    {
      _id: 3,
      title: "implement the UI/UX of the app",
      status: "in-progress",
    },
    {
      _id: 4,
      title: "connect the frontend to the backend",
      status: "not-started",
    },
    {
      _id: 5,
      title: "Ask for code review from the community",
      status: "completed",
    },
  ];

  const onDragOver = (ev) => {
    ev.preventDefault();
  };
  const onDragStart = (ev, item) => {
    console.log("dragStart:", item._id);
    ev.dataTransfer.setData("item", item._id);
  };

  const onDrop = (ev, swimlane) => {
    const _movedTaskId = ev.dataTransfer.getData("item");
    const findTask = tasks.find((task) => task._id === _movedTaskId);

    console.log("movedtask",_movedTaskId);
    console.log('findtask:',findTask);

    // if (findTask) {
    //   findTask.status = swimlane;
    //   console.log('task found:', findTask)
    // }

    // console.log(tasks);
    return tasks;

    //TODO: NOT DONE YET BECAUSE FINDTASK IS RETURNING UNDEFINED...
  };

  return (
    <div className="h-screen flex">
      <div
        className="Todo flex flex-col min-h-screen border bg-red-400"
        onDragOver={(ev) => onDragOver(ev)}
        onDrop={(e) => onDrop(e, "not-started")}
      >
        <h2 className="text-teal-800">Todo</h2>
        {tasks
          .filter((task) => task.status === "not-started")
          .map((todo, index) => (
            <div
              className="card border flex flex-col mt-2 cursor-move"
              draggable
              onDragStart={(e) => onDragStart(e, todo)}
            >
              <p key={index}>{todo.title}</p>
            </div>
          ))}
      </div>
      <div
        className="in-progress flex flex-col min-h-screen border bg-blue-600"
        onDragOver={(ev) => onDragOver(ev)}
        onDrop={(e) => onDrop(e, "in-progress")}
      >
        <h2 className="text-teal-800">In-progress</h2>
        {tasks
          .filter((task) => task.status === "in-progress")
          .map((todo, index) => (
            <div
              className="card border flex flex-col mt-2 cursor-move"
              draggable
              onDragStart={(e) => onDragStart(e, todo)}
            >
              <p key={index}>{todo.title}</p>
            </div>
          ))}
      </div>
      <div
        className="completed flex flex-col min-h-screen border bg-green-400"
        onDragOver={(ev) => onDragOver(ev)}
        onDrop={(e) => onDrop(e, "completed")}
      >
        <h2 className="text-teal-800">Completed</h2>
        {tasks
          .filter((task) => task.status === "completed")
          .map((todo, index) => (
            <div
              className="card border flex flex-col mt-2 cursor-move"
              draggable
              onDragStart={(e) => onDragStart(e, todo)}
            >
              <p key={index}>{todo.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskBoard;
