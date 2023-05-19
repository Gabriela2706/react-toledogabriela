import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Inicio from "./components/Inicio/Inicio";

import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { FormularioContainer } from "./components/Formulario/FormularioContainer";
import { CartContextProvider } from "./context/CartContext";
import { DetailCart } from "./components/CarritoDetalle/DetailCart";

import { FinDeLaCompraContainer } from "./components/FinDeLaCompra/FinDeLaCompraContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/todos" element={<ItemListContainer />} />
            <Route path="/categoria/:nombre" element={<ItemListContainer />} />
            <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
            <Route path="/detailcart" element={<DetailCart />} />
            <Route path="/formulario" element={<FormularioContainer />} />
            <Route path="/findelacompra" element={<FinDeLaCompraContainer />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
