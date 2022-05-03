import React from "react";
import FlashMessages from "../components/FlashMessages/FlashMessages";
import Siderbar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex flex-grow">
        <Siderbar />

        <main className="flex flex-col w-full px-6 py-3">
          <FlashMessages />
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
