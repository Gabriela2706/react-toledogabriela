import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Inicio from "./components/Inicio/Inicio";

import DetailCart from "./components/CartWidget/DetailCart";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/todos" element={<ItemListContainer />} />
          <Route path="/categoria/:nombre" element={<ItemListContainer />} />
          <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
          <Route path="/detailcart" element={<DetailCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
