import { FinDeLaCompra } from "./FinDeLaCompra";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FinDeLaCompraContainer = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
    },
    onSubmit: (datos) => {
      console.log(datos);
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(2, "El nombre debe tener 2 caracteres min")
        .max(10, "El nombre debe tener un maximo de 10 caracteres "),
      apellido: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string().email().required("Este campo es obligatorio"),
      telefono: Yup.number().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <FinDeLaCompra
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />{" "}
    </div>
  );
};
