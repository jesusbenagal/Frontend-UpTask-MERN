import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [alerta, setAlerta] = useState({});

  const showAlert = (alerta) => {
    setTimeout(() => {
      setAlerta({});
    }, 5000);

    setAlerta(alerta);
  };

  const submitProyecto = async (proyecto) => {
    console.log(proyecto);
  };

  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        showAlert,
        alerta,
        submitProyecto,
      }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
