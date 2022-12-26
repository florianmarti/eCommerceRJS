import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Services/firebase/firebaseConfig";

const ItemListConteiner = ({ wellcome }) => {
  const [Productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    const productosReferencia = collection(db, "Productos");

    getDocs(productosReferencia).then((response) => {
      const productosAdaptados = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProductos(productosAdaptados);
    });
  }, [catId]);

  return (
    <div>
      <h1>{wellcome}</h1>
      <ItemList productos={Productos} />
    </div>
  );
};
export default ItemListConteiner;
