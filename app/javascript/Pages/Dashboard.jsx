import React from "react";
import ProfileIcon from "../components/Icons/ProfileIcon";
import MainLayout from "../layouts/Main";

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
    </MainLayout>
  );
};

export default Dashboard;
