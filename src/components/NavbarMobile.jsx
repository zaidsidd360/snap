import React from "react";
import Logo from "../assets/logo.svg";
import Ham from "../assets/icon-menu.svg";
import Close from "../assets/icon-close-menu.svg";
import { useState } from "react";
import ArrowUp from "../assets/icon-arrow-up.svg";
import ArrowDown from "../assets/icon-arrow-down.svg";
import Calender from "../assets/icon-calendar.svg";
import Planning from "../assets/icon-planning.svg";
import Reminders from "../assets/icon-reminders.svg";
import Todo from "../assets/icon-todo.svg";

const NavbarMobile = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [featuresMobile, setFeaturesMobile] = useState(false);
  const [companyMobile, setCompanyMobile] = useState(false);
  return (
    <>
      <div className="relative md:hidden">
        <img className="p-3 py-4 fixed" src={Logo} alt="logo" />
        <div
          className="fixed top-0 right-0 p-3 py-4 z-20"
          onClick={() => {
            setNavToggle(!navToggle);
          }}
        >
          <img src={navToggle ? Close : Ham} alt="menu" />
        </div>
      </div>
      <div
        className={
          !navToggle
            ? "fixed top-0 right-0 translate-x-[500px] list-none pt-10 z-10 h-[100vh] w-[65vw] ease-linear duration-300 md:hidden bg-white"
            : "fixed top-0 right-0 h-[100vh] w-[65vw] list-none pt-10 z-10 duration-300 ease-linear md:hidden bg-white"
        }
      >
        <div className="pl-6 pt-2 font-medium">
          <div>
            <li
              onClick={() => {
                setFeaturesMobile(!featuresMobile);
              }}
              className={
                featuresMobile
                  ? "py-2 flex items-center text-black"
                  : "py-2 flex items-center text-medium-gray"
              }
            >
              Features{" "}
              <img
                className="w-3 h-2 ml-2 mt-1"
                src={featuresMobile ? ArrowUp : ArrowDown}
                alt=""
              />
            </li>
            <div
              className={featuresMobile ? "pl-3 text-medium-gray" : "hidden"}
            >
              <li className="flex items-center my-2">
                <img className="mr-2 w-4 h-4 my-2" src={Todo} alt="" />
                Todo list
              </li>
              <li className="flex items-center my-2">
                <img className="mr-2 w-4 h-4 my-2" src={Calender} alt="" />
                Calender
              </li>
              <li className="flex items-center my-2">
                <img className="mr-2 w-4 h-4 my-2" src={Reminders} alt="" />
                Reminders
              </li>
              <li className="flex items-center my-2">
                <img className="mr-2 w-4 h-4 my-2" src={Planning} alt="" />
                Planning
              </li>
            </div>
          </div>
          <div>
            <li
              onClick={() => {
                setCompanyMobile(!companyMobile);
              }}
              className={
                companyMobile
                  ? "py-2 flex items-center text-black"
                  : "py-2 flex items-center text-medium-gray"
              }
            >
              Company{" "}
              <img
                className="w-3 h-2 ml-2 mt-1"
                src={companyMobile ? ArrowUp : ArrowDown}
                alt=""
              />
            </li>
            <div className={companyMobile ? "pl-3 text-medium-gray" : "hidden"}>
              <li className="flex items-center my-2">History</li>
              <li className="flex items-center my-2">Our Team</li>
              <li className="flex items-center my-2">Blog</li>
            </div>
          </div>
          <li className="py-2 text-medium-gray">Careers</li>
          <li className="py-2 text-medium-gray">About</li>
        </div>
        <div className="px-5 pt-3 text-center font-medium">
          <li className="py-2 text-medium-gray">Login</li>
          <li className="py-2 border-primary text-medium-gray">Register</li>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
