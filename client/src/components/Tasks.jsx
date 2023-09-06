const TaskBoard = () => {
  const tasks = [
    {
      title: "complete the frontend architecture of the app",
      progress: "not started",
    },
    {
      title: "complete the backend architecture of the app",
      progress: "completed",
    },
    {
      title: "implement the UI/UX of the app",
      progress: "in-progress",
    },
    {
      title: "connect the frontend to the backend",
      progress: "not started",
    },
    {
      title: "Ask for code review from the community",
      progress: "completed",
    },
  ];

  return (
    <div className="h-screen flex">
      <div className="Todo flex flex-col min-h-screen border">
        <h2 className="text-teal-800">Todo</h2>
        {tasks
          .filter((task) => task.progress === "not started")
          .map((todo, index) => (
            <div className="card border flex flex-col mt-2">
              <p key={index}>{todo.title}</p>
            </div>
          ))}
      </div>
      <div className="in-progress flex flex-col min-h-screen border">
        <h2 className="text-teal-800">In-progress</h2>
        {tasks
          .filter((task) => task.progress === "in-progress")
          .map((todo, index) => (
            <div className="card border flex flex-col mt-2">
              <p key={index}>{todo.title}</p>
            </div>
          ))}
      </div>
      <div className="completed flex flex-col min-h-screen border">
        <h2 className="text-teal-800">Completed</h2>
        {tasks
          .filter((task) => task.progress === "completed")
          .map((todo, index) => (
            <div className="card border flex flex-col mt-2">
              <p key={index}>{todo.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskBoard;
