import { GoTasklist } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { RiDashboard3Line } from "react-icons/ri";
import { TbLayoutKanban } from "react-icons/tb";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col items-start pl-5 panel min-h-screen w-72 text-white border border-orange-400 bg-red-950">
      <div className="flex items-center w-full">
        <div className="logo h-20 rounded border object-cover mt-2 flex">
          <img className="h-full w-full" src={logo} alt="achiever logo" />
        </div>
        <h2>comer</h2>
      </div>

      <ul className="mt-5">
        <div className="">
          <h5 className="text-yellow-400 ">HOME</h5>
          <li className="flex items-center gap-2">
            <span>
              <RiDashboard3Line></RiDashboard3Line>
            </span>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </div>
      </ul>
      <ul className="mt-5 flex flex-col">
        <h5 className="text-yellow-400">ACTIVITIES</h5>
        <li className="flex items-center gap-2">
          <span>
            <TbLayoutKanban></TbLayoutKanban>
          </span>
          <Link to="/taskboard">Task Board</Link>
        </li>
        <li className="mt-3 flex items-center gap-2">
          <span>
            <GoTasklist></GoTasklist>
          </span>
          <Link to="/goals">Goals</Link>
        </li>
        <li className="mt-3 flex items-center gap-2">
          <span>
            <GoGoal></GoGoal>
          </span>
          <Link to="/goalgroup">Goal Category</Link>
        </li>
        <li className="mt-3 flex items-center gap-2">
          <span>
            <FaRegCalendarAlt></FaRegCalendarAlt>
          </span>
          <Link to="/calender">Calender</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
