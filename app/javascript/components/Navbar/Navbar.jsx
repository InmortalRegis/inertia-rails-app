import { Link } from "@inertiajs/inertia-react";
import React from "react";
import LogOutIcon from "../Icons/LogOutIcon";
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white text-black w-screen">
      <div className="px-5 xl:px-12 py-3 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          <img
            className="h-12"
            src={require("../../../assets/images/expertic-logo.png")}
            alt=""
          />
        </a>

        <div className="hidden xl:flex items-center space-x-5 absolute right-10">
          <Link
            className="flex items-center hover:text-gray-200"
            href={window.$routes.destroy_user_session()}
            method="delete"
            as="button"
          >
            <LogOutIcon />
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
