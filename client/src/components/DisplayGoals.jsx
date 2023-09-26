import { goalList } from "../db/goalData.js";

const ShowGoals = () => {
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
      <div>
        <ListOfGoals></ListOfGoals>
      </div>
    </div>
  );
};

const ListOfGoals = () => {
  const renderListItems = (header) => {
    return (
      <div className="text-center grow font-IBM-Plex-Sans text-[#394f72] text-sm font-semibold">
        <h2 className="mb-4 uppercase text-left pl-3">{header}</h2>
        <ul className="flex flex-col gap-3 w-full">
          {goalList.map((item, index) => (
            <li
              key={index}
              className={`
                flex border w-full justify-start items-center p-3 shadow-sm bg-white rounded-sm 
                ${header === 'title' ? 'text-[#69bfd1] font-bold lowercase' : 'uppercase'}
                ${header === 'action' ? 'text-red-500 font-bold' : 'uppercase'}
                ${item.status === "Planned" && header==='status'? 'bg-red-100 text-[#fc8667]' : ""}
                ${item.status === "Ongoing" && header==='status'? 'bg-blue-100 text-[#4e7afc]' : ""}
                ${item.status === "completed" && header==='status'? 'bg-green-100 text-[#56d428]': ""}
                ${item.status === "completed" && header==='title'? 'line-through text-[#9aa6af]': ""}
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

export default ShowGoals;
