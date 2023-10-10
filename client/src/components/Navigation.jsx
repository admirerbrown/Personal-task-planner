import { GoTasklist } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { RiDashboard3Line } from "react-icons/ri";
import { TbLayoutKanban } from "react-icons/tb";
import logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="hidden xl:flex flex-col items-start pl-5 panel h-screen w-72 border shadow-sm bg-[rgb(255,255,255)] font-IBM-Plex-Sans ">
      <div className="flex items-center w-full flex-col gap-5 mb-5">
        <div className="logo h-20 w-20 object-contain mt-12 shadow-md">
          <img
            className="h-full w-full rounded-full"
            src={logo}
            alt="achiever logo"
          />
        </div>
        <h2 className="text-lg font-bold capitalize text-[#3c80fd]">comer</h2>
      </div>
      <ul className="mt-5">
        <div className="flex flex-col gap-4">
          <h5 className="text-[#a5a9b4] tracking-widest text-md">HOME</h5>
          <li className="flex items-center text-sm gap-2 font-semibold h-10 w-40 rounded p-1 relative hover:bg-[#3c80fd] hover:text-white">
            <NavLink
              to="/dashboard"
              activeClassName="active-link"
              className="flex items-center gap-2 "
            >
              <RiDashboard3Line />
              Dashboard
            </NavLink>
            {location.pathname === "/dashboard" && (
              <div className="w-2 h-2 ml-7 bg-green-500 rounded-full absolute top-1/2 right-[-30px] transform -translate-y-1/2"></div>
            )}
          </li>
        </div>
      </ul>
      <br />

      <ul className="mt-5 flex flex-col gap-4">
        <h5 className="text-[#a5a9b4] tracking-widest text-md">ACTIVITIES</h5>
        <li className="flex items-center text-sm gap-2 font-semibold h-10 w-40 rounded p-1 relative hover:bg-[#3c80fd] hover:text-white">
          <NavLink
            to="/taskboard"
            activeClassName="active-link"
            className="flex items-center gap-2 "
          >
            <TbLayoutKanban></TbLayoutKanban>
            Task Board
          </NavLink>
          {location.pathname === "/taskboard" && (
            <div className="w-2 h-2 ml-7 bg-green-500 rounded-full absolute top-1/2 right-[-30px] transform -translate-y-1/2"></div>
          )}
        </li>

        <li className="flex items-center text-sm gap-2 font-semibold h-10 w-40 rounded p-1 relative hover:bg-[#3c80fd] hover:text-white">
          <NavLink
            to="/goals"
            activeClassName="active-link"
            className="flex items-center gap-2 "
          >
            <GoTasklist></GoTasklist>
            Goals
          </NavLink>
          {location.pathname === "/goals" && (
            <div className="w-2 h-2 ml-7 bg-green-500 rounded-full absolute top-1/2 right-[-30px] transform -translate-y-1/2"></div>
          )}
        </li>

        <li className="flex items-center text-sm gap-2 font-semibold h-10 w-40 rounded p-1 relative hover:bg-[#3c80fd] hover:text-white">
          <NavLink
            to="/goalgroup"
            activeClassName="active-link"
            className="flex items-center gap-2 "
          >
            <GoGoal></GoGoal>
            Goal Category
          </NavLink>
          {location.pathname === "/goalgroup" && (
            <div className="w-2 h-2 ml-7 bg-green-500 rounded-full absolute top-1/2 right-[-30px] transform -translate-y-1/2"></div>
          )}
        </li>

        <li className="flex items-center  gap-2 font-semibold h-10 w-40 rounded p-1 relative hover:bg-[#3c80fd] hover:text-white">
          <NavLink
            to="/calender"
            activeClassName="active-link"
            className="flex items-center gap-2 "
          >
            <FaRegCalendarAlt></FaRegCalendarAlt>
            Calender
          </NavLink>
          {location.pathname === "/calender" && (
            <div className="w-2 h-2 ml-7 bg-green-500 rounded-full absolute top-1/2 right-[-30px] transform -translate-y-1/2"></div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;


