import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc } from "firebase/firestore";
import { db } from "../Services/firebase/firebaseConfig";

const ItemDetailConteiner = () => {
  const [producto, setProductos] = useState({});
  const [loading, setloading] = useState(true);

  const { prodId } = useParams();

  useEffect(() => {
    const productosReferencia = (db, "products", prodId);
    getDoc(productosReferencia)
      .then((response) => {
        const data = response.data();
        const productoAdaptados = { id: response.id, ...data };

        setProductos(productoAdaptados);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [prodId]);
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailConteiner;
