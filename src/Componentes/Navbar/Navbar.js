import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="divConteiner">
      <nav className="containerNav">
        <h1 style={{ color: props.color }}>Navbar de eCommerce</h1>
        <section>
          <Link to="/categoria/Regional">
            <button>Regionales</button>
          </Link>
          <Link to="/categoria/Bombillas">
            <button>Bomillas</button>
          </Link>
        </section>
        <br></br>

        <CartWidget />
      </nav>
    </div>
  );
};
export default Navbar;
