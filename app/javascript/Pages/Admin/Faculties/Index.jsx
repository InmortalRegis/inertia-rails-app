import React, { useEffect } from "react";
import MainLayout from "../../../layouts/Main";
import ATable from "../../../components/ATable/ATable";
import { usePage } from "@inertiajs/inertia-react";
import ABtn from "../../../components/ABtn/ABtn";
import CTable from "../../../components/CTable/CTable";
const Faculties = () => {
  const { faculties } = usePage().props;

  const headers = [
    {
      name: "Nombre",
      value: "name",
    },
    {
      name: "Código",
      value: "code",
    },
  ];
  return (
    <MainLayout>
      <div className="flex justify-end mb-3">
        <ABtn href={window.$routes.admin_new_faculty()}>Crear facultad</ABtn>
      </div>
      <ATable items={faculties} headers={headers} title="Facultades" />
      <CTable />
    </MainLayout>
  );
};

export default Faculties;
