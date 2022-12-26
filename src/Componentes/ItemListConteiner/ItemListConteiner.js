import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Services/firebase/firebaseConfig";

const ItemListConteiner = ({ wellcome }) => {
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();

  useEffect(() => {
    const productosReferencia = catId
      ? query(collection(db, "productos"), where("categoria", "==", catId))
      : collection(db, "productos");

    getDocs(productosReferencia)
      .then((response) => {
        const productosAdaptados = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productosAdaptados);
      })
      .catch((error) => {
        alert("No se esta cargando");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
      <h1>{wellcome}</h1>
      <ItemList productos={Productos} />
    </div>
  );
};
export default ItemListConteiner;
