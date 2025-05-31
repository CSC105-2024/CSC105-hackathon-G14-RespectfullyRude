import React from "react";
import logo from "../../assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useWidth } from "@/hooks/useWidth";
import SortBtn from "../sidebar/SortBtn";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = ({ activePage, setSelectedCourses, courses }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { width } = useWidth();

  const onSearch = (e) => {
    const title = e.target.value.toLowerCase();
    setSelectedCourses(
      courses.filter((c) => c.title.toLowerCase().includes(title))
    );
  };

  return (
    <nav
      className={`flex flex-row justify-between px-2 py-3 sticky top-0 bg-white z-50 shadow`}
    >
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="Error" className="md:w-20 w-10" />
        {/* condtional rendering */}
        <h2
          className={`text-2xl font-bold text-[var(--primary-color)] ${
            activePage !== "courseoverview" ? "hidden" : ""
          }`}
        >
          AI HUB
        </h2>
      </div>

      {width > 768 ? (
        <>
          {/* condtional rendering */}
          {activePage === "courseoverview" ? (
            <div className="flex gap-3 items-center cursor-pointer">
              <div className="flex items-center border border-gray-400 px-3 w-100 rounded-md hover:border-[var(--primary-color)] h-9">
                <Input
                  type="text"
                  placeholder="Search"
                  className="outline-none ring-0 border-none shadow-none focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:border-none bg-transparent text-inherit placeholder:text-inherit"
                  onChange={(e) => onSearch(e)}
                />

                <IoSearchSharp />
              </div>
              <SortBtn
                name={"Sort by:"}
                className={" border-gray-400"}
                setSelectedCourses={setSelectedCourses}
                courses={courses}
              />
            </div>
          ) : (
            <div className="font-bold text-md flex items-center cursor-pointer">
              Contribute the AI knowledge with AI Hub!
            </div>
          )}

          <div
            className={`mr-2 flex items-center text-center ${
              activePage !== "setting" ? "flex-col" : ""
            } ${activePage !== "setting" ? "cursor-pointer" : ""}`}
          >
            {/* condtional rendering */}

            <Avatar
              onClick={() => {
                navigate("/settings");
              }}
              className={`h-auto w-13 ${
                activePage === "setting" ? "hidden" : ""
              }`}
            >
              <AvatarImage src={user?.img_url} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* condtional rendering */}
            <div
              className={`font-bold ${
                activePage === "setting" ? "text-xl" : ""
              } cursor-pointer`}
            >
              {user?.role}
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-[var(--primary-color)] text-2xl font-bold flex items-center">
          AI HUB
        </h2>
      )}
    </nav>
  );
};

export default NavBar;
