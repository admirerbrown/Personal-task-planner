import React, { useState } from "react";
import { goalList } from "../db/goalData.js";
const ShowGoals = () => {
  return (
    <div>
      <div className="m-10">
        <div className="banner-img w-full h-52 bg-slate-600 mb-7 rounded-lg object-cover">
          <img
            className="h-full w-full rounded-lg"
            src="https://img.freepik.com/free-photo/dartboard-with-arrow-red-background-symbol-setup-business-objective-achievement-target-concept-by-3d-render_616485-93.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais"
            alt=""
          />
        </div>
      </div>
      <div>
        <YourComponent></YourComponent>
      </div>
    </div>
  );
};

const YourComponent = () => {
  const renderListItems = (header) => {
    return (
      <div className="border">
        <h2>{header}</h2>
        <ul className="flex flex-col gap-3">
          {goalList.map((item, index) => (
            <li key={index} className="flex border h-14 justify-start w-full items-center">
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
    <div className="flex text-black justify-between mx-10">
      {renderListItems('title')}
      {renderListItems('progress')}
      {renderListItems('status')}
      {renderListItems('category')}
      {renderListItems('actions')}
    </div>
  );
};


export default ShowGoals;
