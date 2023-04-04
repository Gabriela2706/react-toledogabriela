import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.css";
import imglogo from "./pola.png";

export const Navbar = () => {
  return (
    <div className="estilosNavbar">
      <ul style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <img src={imglogo} alt="Logo de la empresa" className="estiloImg" />
        <li className="estilosSeccion">JEANS</li>
        <li className="estilosSeccion">CAMPERAS</li>
        <li className="estilosSeccion">ACCESORIOS</li>
        <li className="estilosSeccion">LIQUIDACION</li>
      </ul>
      <ul style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <CartWidget />
      </ul>
    </div>
  );
};
