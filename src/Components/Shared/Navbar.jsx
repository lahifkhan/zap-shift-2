import React from "react";
import Logo from "../Ui/Logo";
import { NavLink } from "react-router";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            {/* Hamburger Icon */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl"
            >
              <HiMenu />
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow gap-2"
            >
              <li>
                <NavLink className="text-des hover:text-black">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to={"/coverage"} className="text-des hover:text-black">
                  Coverage
                </NavLink>
              </li>
              <li>
                <NavLink className="text-des hover:text-black">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="text-des hover:text-black">Pricing</NavLink>
              </li>
              <li>
                <NavLink className="text-des hover:text-black">Blog</NavLink>
              </li>
              <li>
                <NavLink className="text-des hover:text-black">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Logo />
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink className="text-des hover:text-black">Services</NavLink>
            </li>
            <li>
              <NavLink to={"/coverage"} className="text-des hover:text-black">
                Coverage
              </NavLink>
            </li>
            <li>
              <NavLink className="text-des hover:text-black">About Us</NavLink>
            </li>
            <li>
              <NavLink className="text-des hover:text-black">Pricing</NavLink>
            </li>
            <li>
              <NavLink className="text-des hover:text-black">Blog</NavLink>
            </li>
            <li>
              <NavLink className="text-des hover:text-black">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          <a className="btn rounded-xl text-[#606060] font-bold">Sign in</a>
          <a className="btn btn-primary rounded-xl text-[#1F1F1F] font-bold">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
