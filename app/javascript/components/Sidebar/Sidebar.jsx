import React from "react";
import BoxIcon from "../Icons/BoxIcon";
import ClientIcon from "../Icons/ClientIcon";
import HomeIcon from "../Icons/HomeIcon";
import LogOutIcon from "../Icons/LogOutIcon";
import MessageIcon from "../Icons/MessageIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import TaskIcon from "../Icons/TaskIcon";

const SidebarItem = ({ badge, icon, name, badgeStyle }) => {
  const getClasses = (style) => {
    switch (style) {
      case "success":
        return "text-green-500 bg-green-50";
      case "danger":
        return "text-red-500 bg-red-50";
      case "indigo":
        return "text-indigo-500 bg-indigo-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };
  return (
    <a
      href="#"
      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
    >
      <span className="inline-flex justify-center items-center ml-4">
        {icon}
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">{name}</span>
      {badge && (
        <span
          className={
            "px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full " +
            getClasses(badgeStyle)
          }
        >
          {badge}
        </span>
      )}
    </a>
  );
};

const Sidebar = () => {
  const items = [
    { header: "Menu" },
    { name: "Dashboard", icon: <HomeIcon /> },
    { name: "Cursos", icon: <TaskIcon />, badge: "10", badgeStyle: "success" },
    {
      name: "Grupos de cursos",
      icon: <BoxIcon />,
      badge: "Nuevo",
      badgeStyle: "indigo",
    },
    {
      name: "Grupos de laboratorios",
      icon: <ClientIcon />,
      badge: "15",
      badgeStyle: "danger",
    },
    {
      name: "Lecciones /PI",
      icon: <MessageIcon />,
    },
    {
      name: "Calendario",
      icon: <NotificationIcon />,
    },
    {
      name: "Sedes",
      icon: <BoxIcon />,
    },
    {
      name: "Programas Académicos",
      icon: <TaskIcon />,
    },
    {
      name: "Asignaturas",
      icon: <TaskIcon />,
    },
    {
      name: "Facultades",
      icon: <TaskIcon />,
    },
    {
      name: "Escuelas",
      icon: <TaskIcon />,
    },
    { header: "Configuraciones" },
    { name: "Usuarios", icon: <ClientIcon /> },
    { name: "Roles", icon: <ProfileIcon /> },
    { name: "Admin Contenido", icon: <SettingsIcon /> },
  ];
  return (
    <div className="flex flex-col left-0 w-64 bg-pickled-bluewood  h-full border-r">
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          {items.map((item, index) => {
            if (item.header) {
              return (
                <li className="px-5" key={index}>
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-white">
                      {item.header}
                    </div>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <SidebarItem
                    badge={item.badge}
                    icon={item.icon}
                    name={item.name}
                    badgeStyle={item.badgeStyle}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
