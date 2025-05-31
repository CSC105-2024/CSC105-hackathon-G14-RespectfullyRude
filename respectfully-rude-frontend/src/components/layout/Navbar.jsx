import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import img9 from "../../assets/img9.png";
import AlertBox from "../AlertBox";
import { useLogout } from "@/hooks/useLogout";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "bg-[var(--color-primary)] text-white"
      : "text-[var(--color-primary)] hover:bg-neutral-100";
  };

  const DrawerMenu = (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={() => setMobileOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <NavLink
            to="/dashboard/home"
            onClick={() => setMobileOpen(false)}
            className="my-2 mx-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/create"
            onClick={() => setMobileOpen(false)}
            className="my-2 mx-4"
          >
            Generate
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="my-2 mx-4"
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  );
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <nav className="flex bg-white shadow-sm py-3 px-7 text-[var(--color-primary)] items-center justify-between sticky top-0 z-40">
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
        <div
          className="md:hidden p-2 rounded-lg text-[var(--color-primary)] hover:bg-neutral-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          {mobileOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </div>
        {mobileOpen && DrawerMenu}
      </nav>
    </>
  );
};

export default Navbar;
