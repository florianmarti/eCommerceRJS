import { useContext } from "react";
import { CartContext } from "../../Componentes/Context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { getCantidad } = useContext(CartContext);

  const cantidadTotal = getCantidad();
  return (
    <button>
      <box-icon type="solid" name="cart-alt"></box-icon>
      <Link to="/cart">cart: {cantidadTotal}</Link>
    </button>
  );
};
export default CartWidget;
