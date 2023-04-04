import "./App.css";
import ItemList from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  let saludo = "Hola! Bienvenido a Pola Sur";
  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
