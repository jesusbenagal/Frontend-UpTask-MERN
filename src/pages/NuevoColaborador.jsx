import FormularioColaborador from "../components/FormularioColaborador";

const NuevoColaborador = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Añadir Colaborador(a)</h1>

      <div className="flex justify-center mt-10">
        <FormularioColaborador />
      </div>
    </>
  );
};

export default NuevoColaborador;
