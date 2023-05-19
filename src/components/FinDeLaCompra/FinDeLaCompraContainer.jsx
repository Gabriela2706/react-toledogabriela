import { FinDeLaCompra } from "./FinDeLaCompra";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const FinDeLaCompraContainer = () => {
  const { cart, obtenerTotalCarrito } = useContext(CartContext);

  const checkout = (datos) => {
    let ordenDeCompra = {
      buyer: datos,
      items: cart,
      total: obtenerTotalCarrito,
    };
    const ordersCollection = collection(database, "ordenes");
    addDoc(ordersCollection, ordenDeCompra).then((res) => console.log(res.id));
  };
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
    },
    onSubmit: checkout,
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
