import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.css";
import imglogo from "./pola.png";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="estilosNavbar">
        <ul style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Link to={"/"}>
            <img src={imglogo} alt="Logo de la empresa" className="estiloImg" />
          </Link>
          <Link to={"/categoria/jeans"} className="estilosSeccion">
            JEANS
          </Link>
          <Link to={"/categoria/camperas"} className="estilosSeccion">
            CAMPERAS
          </Link>

          <Link to={"/categoria/accesorios"} className="estilosSeccion">
            ACCESORIOS
          </Link>
          <Link to={"/todos"} className="estilosSeccion">
            TODO
          </Link>
        </ul>
        <ul style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <CartWidget />
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
