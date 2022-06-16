import React from "react";
import useProyectos from "../hooks/useProyectos";

const Proyectos = () => {
  const { proyectos } = useProyectos();
  console.log(proyectos);
  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ? (
          <p className="text-center text-gray-600 uppercase p-5">
            Si hay proyectos
          </p>
        ) : (
          <p className="text-center text-gray-600 uppercase p-5">
            No hay proyectos
          </p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
