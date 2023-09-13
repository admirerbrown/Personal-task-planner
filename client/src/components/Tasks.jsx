import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

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
      className={`${status} flex flex-col min-h-screen border mx-5 font-IBM-Plex-Sans text-black`}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, status)}
    >
      <div className=" flex items-center justify-between  border-b-2   h-14">
        <div className="flex gap-3 items-center">
          <h2 className="uppercase text-center font-medium">{status}</h2>
          <div className="h-5 w-5 bg-[#E0EAF3] border rounded justify-center flex text-sm">3</div>
        </div>
        <div className=" border-2 rounded-md border-dashed h-6 w-6 border-[#c9d8e3] flex justify-center items-center">
        <IoMdAdd className="text-sm"></IoMdAdd>

        </div>
      </div>
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
    <div className="">
      <div className="m-10">
        <div className="banner-img w-full h-52 bg-slate-600 mb-7 rounded-lg object-cover">
          <img
            className="h-full w-full rounded-lg"
            src="https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph"
            alt=""
          />
        </div>
      </div>

      <div className="h-screen grid grid-cols-4 m-5">
        {["not-started", "in-progress", "in-review", "completed"].map(
          (status) => (
            <React.Fragment key={status}>{renderColumn(status)}</React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default TaskBoard;
