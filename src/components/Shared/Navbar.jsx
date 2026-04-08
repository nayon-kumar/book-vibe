import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-[#1A2980] border border-[#1A2980]" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `${isActive ? "text-[#1A2980] border border-[#1A2980]" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/page-to-read"
          className={({ isActive }) =>
            `${isActive ? "text-[#1A2980] border border-[#1A2980]" : ""}`
          }
        >
          Page To Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full z-25">
      <div className="bg-base-100 shadow-sm">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <Link
                to="/"
                className="text-xl font-bold bg-linear-to-r from-[#1A2980] to-[#26D0CE] bg-clip-text text-transparent "
              >
                Book Vibe
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end flex items-center gap-3">
            <a className="btn btn-primary">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
