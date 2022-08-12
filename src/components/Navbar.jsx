import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import ArrowUp from "../assets/icon-arrow-up.svg";
import ArrowDown from "../assets/icon-arrow-down.svg";
import Calender from "../assets/icon-calendar.svg";
import Planning from "../assets/icon-planning.svg";
import Reminders from "../assets/icon-reminders.svg";
import Todo from "../assets/icon-todo.svg";

const Navbar = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <div className="hidden md:flex w-full bg-almost-white font-medium text-medium-gray">
      <ul className="w-full flex items-center justify-between pr-3 mx-8 my-2">
        <div className="flex items-center">
          <li className="pt-2.5 mr-9 pl-6">
            <img src={Logo} alt="logo" />
          </li>
          <li
            className={
              features
                ? "text-almost-black py-4 relative cursor-pointer duration-100 mx-5"
                : "py-4 relative cursor-pointer duration-100 mx-5"
            }
            onClick={() => {
              setFeatures(!features);
            }}
          >
            <div className="flex items-center">
              Features
              <img
                className="w-3 h-2 ml-2 mt-0.5"
                src={features ? ArrowUp : ArrowDown}
                alt="/"
              />
            </div>
            <div
              className={
                features
                  ? "absolute top-14 right-0 bg-full-white rounded shadow-2xl p-4 duration-100 w-36 z-20 cursor-context-menu"
                  : "absolute -translate-y-96 right-0 duration-100 z-20 w-36 cursor-context-menu"
              }
            >
              <div className="flex items-center justify-start my-1 text-medium-gray hover:text-black cursor-pointer">
                <img className="mr-3" src={Todo} alt="" /> To Do list
              </div>
              <div className="flex items-center justify-start my-1 text-medium-gray hover:text-black cursor-pointer">
                <img className="mr-3" src={Calender} alt="" /> Calender
              </div>
              <div className="flex items-center justify-start my-1 text-medium-gray hover:text-black cursor-pointer">
                <img className="mr-3" src={Reminders} alt="" /> Reminders
              </div>
              <div className="flex items-center justify-start my-1 text-medium-gray hover:text-black cursor-pointer">
                <img className="mr-3" src={Planning} alt="" /> Planning
              </div>
            </div>
          </li>
          <li
            className={
              company
                ? "text-almost-black py-4 relative cursor-pointer duration-100 mx-5"
                : "py-4 relative cursor-pointer duration-100 mx-5"
            }
            onClick={() => {
              setCompany(!company);
            }}
          >
            <div className="flex items-center">
              Company
              <img
                className="w-3 h-2 ml-2 mt-0.5"
                src={company ? ArrowUp : ArrowDown}
                alt="/"
              />
            </div>
            <div
              className={
                company
                  ? "absolute top-14 -left-2 bg-full-white rounded shadow-2xl p-2 duration-100 w-30 z-20 cursor-context-menu"
                  : "absolute -translate-y-96 -left-2 duration-100 z-20 w-30 cursor-context-menu"
              }
            >
              <div className="text-medium-gray hover:text-black my-1 cursor-pointer">
                History
              </div>
              <div className="text-medium-gray hover:text-black my-1 cursor-pointer">
                Our Team
              </div>
              <div className="text-medium-gray hover:text-black my-1 cursor-pointer">
                Blog
              </div>
            </div>
          </li>
          <li className="py-4 mx-5 cursor-pointer hover:text-black">Careers</li>
          <li className="py-4 mx-5 cursor-pointer hover:text-black">About</li>
        </div>
        <div className="flex items-center">
          <li className="py-4 mx-5 cursor-pointer hover:text-black">Login</li>
          <li className="p-1.5 mx-4 cursor-pointer border-primary hover:text-black hover:border-black">
            Register
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
