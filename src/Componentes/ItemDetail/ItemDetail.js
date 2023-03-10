import Count from "../ItemCount/Count";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ producto }) => {
  const { id, nombre, img, descripcion, precio, stock } = producto;
  const { addItem, estaEnCarrito } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    addItem({ id, nombre, precio, cantidad, img });
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <img src={img} alt={nombre} />
      <p>{descripcion}</p>
      <h2>$ {precio}</h2>

      {estaEnCarrito(id) ? (
        <button>Terminar Compra</button>
      ) : stock > 0 ? (
        <Count stock={stock} onAdd={handleOnAdd} />
      ) : (
        <h1>No hay Stock</h1>
      )}
    </div>
  );
};
export default ItemDetail;
