import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import img9 from "../../assets/img9.png";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "bg-[var(--color-pale)] text-[var(--color-nav)]"
      : "text-neutral-600 hover:bg-neutral-100";
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
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/home">Generate</Link>
        <Link to="/dashboard/home">Logout</Link>
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
