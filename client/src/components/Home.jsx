import { GoTasklist } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { RiDashboard3Line } from "react-icons/ri";
import { TbLayoutKanban } from "react-icons/tb";

const HomePage = () => {
  return (
    <div className="flex justify-start w-full h-full">
      <div className="flex flex-col items-start pl-5 panel min-h-screen w-72 text-white border border-orange-400 bg-red-950">
        <div className="logo"></div>

        <ul className="mt-5">
          <div className="">
            <h5 className="text-yellow-400 ">HOME</h5>
            <li className="flex">
              <span>
                <RiDashboard3Line></RiDashboard3Line>
              </span>
              Dashboard
            </li>
          </div>
        </ul>
        <ul className="mt-5 flex flex-col">
          <h5 className="text-yellow-400">ACTIVITIES</h5>
          <li className="flex">
            <span>
              <TbLayoutKanban></TbLayoutKanban>
            </span>
            task board
          </li>
          <li className="mt-3 flex">
            <span>
              <GoTasklist></GoTasklist>
            </span>
            goals
          </li>
          <li className="mt-3 flex">
            <span>
              <GoGoal></GoGoal>
            </span>
            goals category
          </li>
          <li className="mt-3 flex">
            <span>
              <FaRegCalendarAlt></FaRegCalendarAlt>
            </span>
            calender
          </li>
        </ul>
      </div>

      <div className="viewer min-h-screen border w-full text-white border-blue-400 bg-purple-600"></div>
    </div>
  );
};

export default HomePage;
