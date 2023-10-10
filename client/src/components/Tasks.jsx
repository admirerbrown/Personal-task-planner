import React, { useState } from "react";
import { getColorForGoalTag } from "../modules/colorGenerator";
import { taskData } from "../db/sampleTask";
import { onDragOver, onDragStart } from "../modules/drag_nd_Drop";
import {TaskModal} from './Modal'

const TaskBoard = () => {
  const [tasks, setTasks] = useState(taskData);

  const getStatusCount = (status) =>
    tasks.filter((task) => task.status === status).length;

  const in_progress = getStatusCount("in-progress");
  const completed = getStatusCount("completed");
  const not_started = getStatusCount("not-started");
  const in_review = getStatusCount("in-review");

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
      className={`${status} flex flex-col mx-5 font-IBM-Plex-Sans text-black `}
    >
      <div className=" flex items-center justify-between border-b-2 h-14 ">
        <div className="flex gap-3 items-center">
          <h2 className="uppercase text-center font-medium">{status}</h2>
          <div className="h-5 w-5 bg-[#E0EAF3] border rounded justify-center flex text-sm">
            {status === "in-progress"
              ? in_progress
              : status === "completed"
              ? completed
              : status === "not-started"
              ? not_started
              : in_review}
          </div>
        </div>
        <TaskModal></TaskModal>
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
            <div className="card-body shrink flex ">
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
    <div className="scroll-smooth overflow-auto h-screen">
      <div className="m-10">
        <div className="banner-img w-full h-52 bg-slate-600 mb-7 rounded-lg object-cover">
          <img
            className="h-full w-full rounded-lg"
            src="https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=sph"
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-4 m-5">
        {["not-started", "in-progress", "in-review", "completed"].map(
          (status) => (
            <div
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, status)}
              key={status}
              className="overflow-y-auto scroll-smooth h-screen"
            >
              {renderColumn(status)}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TaskBoard;

