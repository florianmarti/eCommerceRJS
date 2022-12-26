import { useState, useEffect } from "react";
import { getProductos, getProductosByCategoria } from "../../AsincMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = ({ wellcome }) => {
  const [Productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    if (catId) {
      getProductos()
        .then((response) => {
          setProductos(response.filter((item) => item.categoria === catId));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProductos()
        .then((response) => {
          setProductos(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [catId]);

  return (
    <div>
      <h1>{wellcome}</h1>
      <ItemList Productos={Productos} />
    </div>
  );
};
export default ItemListConteiner;
