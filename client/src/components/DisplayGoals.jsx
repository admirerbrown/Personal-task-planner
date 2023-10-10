import { goalList } from "../db/goalData.js";
import { RiEqualizerFill } from "react-icons/ri";
import React, { useState } from "react";
import Modal from './Modal';

const RenderGoals = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredGoals = goalList.filter((goal) => {
    if (selectedFilter === "all") {
      return true;
    }
    return goal.status.toLowerCase() === selectedFilter.toLowerCase();
  });

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "most_recent", label: "Most Recent" },
    { value: "ongoing", label: "Ongoing" },
    { value: "planned", label: "Planned" },
    { value: "completed", label: "Completed" },
  ];

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  
  return (
    <div className="scroll-smooth overflow-auto h-screen">
      <div className="m-10">
        <div className="banner-img w-full h-52 bg-slate-600 mb-7 rounded-lg object-cover">
          <img
            className="h-full w-full rounded-lg"
            src="https://img.freepik.com/free-photo/dartboard-with-arrow-red-background-symbol-setup-business-objective-achievement-target-concept-by-3d-render_616485-93.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais"
            alt=""
          />
        </div>
      </div>
      <div className="capitalize font-IBM-Plex-Sans flex gap-5 ml-10 mb-5 text-xl items-center">
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="btn m-1 btn-sm flex gap-3 text-[#394f72] rounded-md border-2 bg-[rgb(244,248,251)] hover:bg-transparent"
          >
            <RiEqualizerFill></RiEqualizerFill>Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[#394f72] uppercase"
          >
            {filterOptions.map((option) => (
              <li
                key={option.value}
                className={`hover:bg-[rgb(244,248,251)] ${
                  selectedFilter === option.value ? "bg-[rgb(244,248,251)]" : ""
                }`}
              >
                <a
                  href="#home"
                  onClick={() =>
                    handleFilterChange({ target: { value: option.value } })
                  }
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Modal></Modal>
      </div>

      <div>
        <ListOfGoals goals={filteredGoals}></ListOfGoals>
      </div>
    </div>
  );
};

const ListOfGoals = ({ goals }) => {
  const renderListItems = (header) => {
    return (
      <div className="text-center grow font-IBM-Plex-Sans text-[#394f72] text-sm font-semibold">
        <h2 className="mb-4 uppercase text-left pl-3">{header}</h2>
        <ul className="flex flex-col gap-3 w-full">
          {goals.map((item, index) => (
            <li
              key={index}
              className={`flex border w-full justify-start items-center p-3 shadow-sm bg-white rounded-sm ${
                header === "title"
                  ? "text-[#69bfd1] font-bold lowercase": "uppercase"}
                ${header === "action" ? "text-red-500 font-bold" : "uppercase"}
                ${
                  item.status === "Planned" && header === "status"
                    ? "bg-red-50 text-[#fc8667]": ""
                }
                ${
                  item.status === "Ongoing" && header === "status" ? "bg-blue-100 text-[#4e7afc]" : ""
                }
                ${
                  item.status === "completed" && header === "status"
                    ? "bg-green-100 text-[#56d428]": ""
                }
                ${
                  item.status === "completed" && header === "title"
                    ? "line-through text-[#9aa6af]": ""
                }
              `}
            >
              {item[header]}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  if (goalList.length === 0) {
    return <p>No goals to display</p>;
  }

  return (
    <div className="flex text-black  mx-10">
      {renderListItems("title")}
      {renderListItems("category")}
      {renderListItems("action")}
      {renderListItems("tasks")}
      {renderListItems("progress")}
      {renderListItems("status")}
    </div>
  );
};

export default RenderGoals;

