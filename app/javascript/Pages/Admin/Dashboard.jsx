import React from "react";
import ProfileIcon from "../../components/Icons/ProfileIcon";
import ATable from "../../components/ATable/ATable";
import MainLayout from "../../layouts/Main";

const StatisticCard = ({ icon, statTitle, statValue }) => {
  return (
    <div className="flex px-8 py-6 rounded-lg  bg-white">
      <div className="rounded-full  py-3 text-green-500 bg-green-50 px-3 mr-3">
        {icon}
      </div>
      <div className="flex flex-col px-3">
        <span className="font-bold text-2xl">{statValue}</span>
        <h1>{statTitle}</h1>
      </div>
    </div>
  );
};
const Dashboard = () => {
  const headers = [
    {
      name: "#",
      value: "id",
    },
    {
      name: "Nombre",
      value: "name",
    },
    {
      name: "Vistas",
      value: "views",
    },
  ];

  const items = [
    {
      id: 1,
      name: "Adam",
      views: 858,
    },
    {
      id: 2,
      name: "Adam",
      views: 112,
    },
    {
      id: 3,
      name: "Chris",
      views: 1280,
    },
  ];
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4">
        <StatisticCard
          icon={<ProfileIcon />}
          statValue="124"
          statTitle="Cursos"
        />

        <StatisticCard
          icon={<ProfileIcon />}
          statValue="124"
          statTitle="Asignaturas"
        />

        <StatisticCard
          icon={<ProfileIcon />}
          statValue="124"
          statTitle="Lecciones"
        />
      </div>
      <div className="pt-3">
        <ATable headers={headers} items={items} title="Cursos más vistos" />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
