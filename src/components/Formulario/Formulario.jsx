import { useState } from "react";

export const Formulario = ({ titulo }) => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
  });
  console.log(userData);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.nombre}
          name="nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={userData.apellido}
          name="apellido"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
