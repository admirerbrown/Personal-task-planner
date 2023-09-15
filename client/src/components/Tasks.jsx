import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const TaskBoard = () => {
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function clearLocalStorageOnRefresh() {
    // Check if the page is being refreshed
    window.onbeforeunload = function () {
      localStorage.removeItem("colorMap");
    };
  }

  // Call this function to set up the event handler
  clearLocalStorageOnRefresh();

  function getColorForGoalTag(goalTag) {
    let colorMap;

    // Retrieve colorMap from Local Storage or create a new one
    const storedColorMap = localStorage.getItem("colorMap");
    if (storedColorMap) {
      colorMap = JSON.parse(storedColorMap);
    } else {
      colorMap = {};
    }

    if (!colorMap.hasOwnProperty(goalTag)) {
      colorMap[goalTag] = getRandomColor();

      localStorage.setItem("colorMap", JSON.stringify(colorMap));
    }

    return colorMap[goalTag];
  }

  const [tasks, setTasks] = useState([
    {
      _id: 1,
      title: "complete the frontend architecture of the app",
      summary:
        "after choosing ui break the frontend tasks in features and milestones ",
      status: "not-started",
      goal_tag: "job search",
    },
    {
      _id: 2,
      title: "complete the backend architecture of the app",
      summary:
        "build the full backend using node.js and express ensure to take care of CORS",
      status: "in-review",
      goal_tag: "job search",
    },
    {
      _id: 3,
      title: "implement the UI/UX of the app",
      summary:
        "go through a list of task management ui's from dribble and choose an attractive design ",
      status: "in-progress",
      goal_tag: "freelance",
    },
    {
      _id: 4,
      title: "connect the frontend to the backend",
      summary:
        "make this fullstack app by ensuring proper communication between the frontend and backend.use axios for the frontend communication and also use redux for state management",
      status: "not-started",
      goal_tag: "job search",
    },
    {
      _id: 5,
      title: "Ask for code review from the community",
      summary:
        "seek code review from the community explaining the main features of the app and what could be improved or eliminated ",
      status: "completed",
      goal_tag: "freelance",
    },
    {
      _id: 6,
      title: "attend mock interviews for practice",
      summary:
        "use pramp to practice common technical and behavioral interview questions ",
      status: "completed",
      goal_tag: "interview prep",
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
      className={`${status} flex flex-col min-h-screen mx-5 font-IBM-Plex-Sans text-black`}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, status)}
    >
      <div className=" flex items-center justify-between  border-b-2   h-14">
        <div className="flex gap-3 items-center">
          <h2 className="uppercase text-center font-medium">{status}</h2>
          <div className="h-5 w-5 bg-[#E0EAF3] border rounded justify-center flex text-sm">
            4
          </div>
        </div>
        <div className=" border-2 rounded-md border-dashed h-6 w-6 border-[#c9d8e3] flex justify-center items-center">
          <IoMdAdd className="text-sm"></IoMdAdd>
        </div>
      </div>
      {tasks
        .filter((task) => task.status === status)
        .map((todo) => (
          <div
            className="card bg-base-100 shadow-md rounded-md cursor-move mt-4"
            draggable
            onDragStart={(e) => onDragStart(e, todo)}
            key={todo._id}
          >
            <div className="card-body">
              <h2 className="card-title capitalize text-sm ">{todo.title}</h2>
              <p className="text-xs text-gray-400">{todo.summary}</p>
              <div className="card-actions justify-start">
                <button
                  className="btn-sm rounded-md btn-primary text-xs capitalize text-white"
                  style={{ backgroundColor: getColorForGoalTag(todo.goal_tag) }}
                >
                  {todo.goal_tag}
                </button>
              </div>
            </div>
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

//TODO: MAKE APP RESPONSE UPTO LARGE SCREENS
//TODO: MAKE EACH CARD TAG HAS A UNIQUE COLOR BASE ON THE GOAL TAG IN THE EVERY TASK
