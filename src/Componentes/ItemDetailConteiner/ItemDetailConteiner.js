import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Services/firebase/firebaseConfig";

const ItemDetailConteiner = () => {
  const [producto, setProductos] = useState({});
  const [loading, setLoading] = useState(true);

  const { prodId } = useParams();

  useEffect(() => {
    const productosReferencia = doc(db, "productos", prodId);
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
        setLoading(false);
      });
  }, [prodId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  console.log(producto);
  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailConteiner;
