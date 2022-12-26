import { useState, useEffect } from "react";
import { getProductosById } from "../../AsincMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailConteiner = () => {
  const [producto, setProductos] = useState({});

  const { prodId } = useParams();

  useEffect(() => {
    getProductosById(prodId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [prodId]);
  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailConteiner;
