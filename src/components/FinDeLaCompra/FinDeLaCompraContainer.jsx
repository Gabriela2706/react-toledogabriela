import { FinDeLaCompra } from "./FinDeLaCompra";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const FinDeLaCompraContainer = () => {
  const { cart, obtenerTotalCarrito, limpiarCarrito } = useContext(CartContext);
  const [ordenId, setOrdenID] = useState(null);
  const alertaFinCompra = () => {
    Swal.fire({
      title: "<strong> <u>Gracias por tu Compra</u></strong>",

      html: `<b>Tu numero de orden es: ${ordenId} </b>, `,
      icon: "success",
    });
  };

  const checkout = (datos) => {
    let total = obtenerTotalCarrito();

    let ordenDeCompra = {
      buyer: datos,
      items: cart,
      total: total,
    };
    const ordersCollection = collection(database, "ordenes");
    addDoc(ordersCollection, ordenDeCompra).then((res) => setOrdenID(res.id));

    cart.map((productos) =>
      updateDoc(doc(database, "stockProductos", productos.id), {
        stock: productos.stock - productos.quantity,
      })
    );

    limpiarCarrito();
    alertaFinCompra();
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
        ordenId={ordenId}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};
