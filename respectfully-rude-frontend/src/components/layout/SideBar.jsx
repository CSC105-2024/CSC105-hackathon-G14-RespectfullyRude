import React, { useRef } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";

import { Button } from "@/components/ui/button";
import SortBtn from "./SortBtn";
import AlertBox from "../alert-box/AlertBox";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { useAuthContext } from "@/hooks/useAuthContext";
import { IoSearchSharp } from "react-icons/io5";

//TODO: will add later
const btns = [
  {
    name: "Profile Setting",
  },
  { name: "Course Overview" },
];

const Sidebar = ({ setSelectedCourses, courses, activePage, setIsSearch }) => {
  const drawerRef = useRef();
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const handleClick = (name) => {
    if (name === "Course Overview") {
      //This is the same as document.getElementById("my-drawer-4").checked
      drawerRef.current.checked = false;
      //navigate
      navigate("/courses");
    } else if (name === "Profile Setting") {
      drawerRef.current.checked = false;
      navigate("/settings");
    }
  };

  return (
    <div className="drawer drawer-end p-3 sticky top-0 z-50 bg-white shadow">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerRef}
      />
      <div className="drawer-content flex justify-between items-center">
        <div>
          <img src={logo} alt="Error" className="w-12" />
        </div>
        <h2 className="text-[var(--primary-color)] text-2xl font-bold">
          AI HUB
        </h2>

        {/* TODO: need to do conditional rendering */}
        <div className="flex items-center gap-2">
          <IoSearchSharp
            className={`text-2xl ${
              activePage !== "courseoverview" ? "hidden" : ""
            }`}
            onClick={() => setIsSearch((s) => !s)}
          />
          <label htmlFor="my-drawer-4" className="text-4xl">
            <IoReorderThreeSharp />
          </label>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" bg-base-200 min-h-full w-50">
          <div className="flex flex-col gap-3">
            {/* Sidebar content here */}
            <li>
              <div className="rounded flex justify-center mt-15">
                <Profile />
              </div>
            </li>

            {btns.map((b) => (
              <li className="flex flex-col items-center">
                <div>
                  <Button
                    className={
                      "w-35 bg-[var(--primary-color)] text-white hover:bg-violet-900"
                    }
                    onClick={() => {
                      handleClick(b.name);
                    }}
                  >
                    {b.name}
                  </Button>
                </div>
              </li>
            ))}

            <li className="flex justify-center mb-40">
              <SortBtn
                name={"Sort"}
                setSelectedCourses={setSelectedCourses}
                //temp
                courses={courses}
                onClick={() => (drawerRef.current.checked = false)}
              />
            </li>
          </div>

          <li className="flex justify-center">
            <AlertBox
              btnName={"Log out"}
              title={"Are you sure you want to log out?"}
              css={"w-35"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;