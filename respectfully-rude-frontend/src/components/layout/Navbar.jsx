import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import img9 from "../../assets/img9.png";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "bg-[var(--color-primary)] text-white"
      : "text-[var(--color-primary)] hover:bg-neutral-100";
  };

  return (
    <nav className="bg-white shadow-sm py-3 px-7 text-[var(--color-primary)] flex items-center justify-between">
      <div className="text-lg font-semibold">
        <Link to="/dashboard/home">
          {" "}
          {/* add isActive */}
          Respectfully Rude
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link
          to="/dashboard/home"
          className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
            "/dashboard/home"
          )}`}
        >
          Home
        </Link>
        <Link
          to="/dashboard/create"
          className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
            "/dashboard/create"
          )}`}
        >
          Generate
        </Link>
        <Link
          to="/dashboard/home"
          className={`px-3 py-2 rounded-md text-sm font-medium text-[var(--color-primary)] hover:bg-neutral-100
          )}`}
        >
          Logout
        </Link>
        <Avatar
          onClick={() => {
            navigate("/dashboard/home");
          }}
          className={`h-auto w-13`}
        >
          <AvatarImage src={img9} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
