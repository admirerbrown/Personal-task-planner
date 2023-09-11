import React, { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      _id: 1,
      title: "complete the frontend architecture of the app",
      status: "not-started",
    },
    {
      _id: 2,
      title: "complete the backend architecture of the app",
      status: "in-review",
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
  ]);

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDragStart = (ev, item) => {
    ev.dataTransfer.setData("item", item._id);
  };

  const onDrop = (ev, swimlane) => {
    const _movedTaskId = parseInt(ev.dataTransfer.getData("item"), 10);

    const updatedTasks = tasks.map((task) =>
      task._id === _movedTaskId ? { ...task, status: swimlane } : task
    );

    setTasks(updatedTasks);

    return updatedTasks;
  };

  const renderColumn = (status) => (
    <div
      className={`${status} flex flex-col min-h-screen border`}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, status)}
    >
      <h2 className="text-red-800 uppercase text-center">{status}</h2>
      {tasks
        .filter((task) => task.status === status)
        .map((todo) => (
          <div
            className="card border flex flex-col mt-2 cursor-move"
            draggable
            onDragStart={(e) => onDragStart(e, todo)}
            key={todo._id}
          >
            <p>{todo.title}</p>
          </div>
        ))}
    </div>
  );

  return (
    <div className="h-screen grid grid-cols-4">
      {["not-started", "in-progress", "in-review", "completed"].map(
        (status) => (
          <React.Fragment key={status}>{renderColumn(status)}</React.Fragment>
        )
      )}
    </div>
  );
};

export default TaskBoard;
