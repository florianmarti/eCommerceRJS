import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <img src={producto.img} alt={producto.nombre} />
      <p>{producto.nombre}</p>
      <p>{producto.categoria}</p>
      <p>$ {producto.precio}</p>
      <Link to={`/detail/${producto.id}`}>Ver detalle</Link>
    </div>
  );
};
export default Item;
