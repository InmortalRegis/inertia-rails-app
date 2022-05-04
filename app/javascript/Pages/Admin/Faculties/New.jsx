import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import AInput from "../../../components/AInput/AInput";
import MainLayout from "../../../layouts/Main";
import ABtn from "../../../components/ABtn/ABtn";
const New = () => {
  const [facultyState, setFacultState] = useState({
    name: "",
    code: "",
  });
  const createFaculty = (e) => {
    console.log("🚀 ~ file: New.jsx ~ line 19 ~ createFaculty ~ e", e);
    e.preventDefault();
    console.log(
      "🚀 ~ file: New.jsx ~ line 12 ~ createFaculty ~ facultyState",
      facultyState
    );
    Inertia.post(window.$routes.admin_create_faculty(), {
      faculty: facultyState,
    });
  };

  const inputHandleChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFacultState({
      ...facultyState,
      [name]: target.value,
    });
  };
  return (
    <MainLayout>
      <form onSubmit={createFaculty} className="bg-white px-6 py-6 rounded-md ">
        <div className="mb-3">
          <AInput
            onChange={inputHandleChange}
            name="name"
            label="Nombre"
          ></AInput>
        </div>
        <div className="mb-3">
          <AInput
            onChange={inputHandleChange}
            name="code"
            label="Código"
          ></AInput>
        </div>

        <div className="flex justify-end">
          <ABtn type="submit" as="button">
            Crear
          </ABtn>
        </div>
      </form>
    </MainLayout>
  );
};

export default New;
