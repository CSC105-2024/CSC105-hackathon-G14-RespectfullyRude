import { useDataContext } from "@/hooks/useDataContext";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export const SearchResults = ({ setIsSearch }) => {
  const [searchCourses, setSearchCourses] = useState([]);
  const { data } = useDataContext();

  //TODO: need to replace with real data
  const onSearchChange = (e) => {
    const course = e.target.value.toLowerCase();

    if (!course) return setSearchCourses([]);

    setSearchCourses(
      data.filter((c) => c.title.toLowerCase().includes(course))
    );
  };

  const navigate = useNavigate();

  //TODO: not static
  const redirect = (id) => {
    navigate(`/dashboard/course/${id}`);
  };

  return (
    <>
      <div className="border-b p-3 border-gray-500 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IoSearchSharp />
          <input
            type="text"
            placeholder="Search Courses"
            className="focus:outline-none  focus:border-none"
            onChange={(e) => onSearchChange(e)}
          />
        </div>
        <div>
          <RxCross2 onClick={() => setIsSearch(false)} />
        </div>
      </div>

      {searchCourses.map((c, i) => (
        <div
          className="text-black border p-3"
          id={i}
          key={i}
          onClick={() => redirect(c.id)}
        >
          {c.title}
        </div>
      ))}
    </>
  );
};
