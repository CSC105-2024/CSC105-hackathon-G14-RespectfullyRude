import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import img9 from "../../assets/img9.png";
import AlertBox from "../AlertBox";
import { useLogout } from "@/hooks/useLogout";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "bg-[var(--color-primary)] text-white"
      : "text-[var(--color-primary)] hover:bg-neutral-100";
  };

  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <nav className="flex bg-white shadow-sm py-3 px-7 text-[var(--color-primary)] items-center justify-between sticky top-0">
        <div className="text-lg font-semibold">
          <Link to="/dashboard/home">
            {" "}
            {/* add isActive */}
            Respectfully Rude
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
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
          <AlertBox
            buttonName={"Logout"}
            css={
              "px-3 py-2 rounded-md text-sm font-medium bg-white text-[var(--color-primary)] hover:bg-neutral-100"
            }
            title={"Are you sure you want to logout?"}
            onClick={handleLogout}
          />
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
    </>
  );
};

export default Navbar;
