import { Formulario } from "./Formulario";

export const FormularioContainer = () => {
  const titulo = "Esto es el formulario";

  return (
    <div>
      <Formulario titulo={titulo} />
    </div>
  );
};
