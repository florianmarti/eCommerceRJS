import { useState } from "react";

const Count = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const quitar = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const agregar = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={quitar}>-</button>
      <button onClick={agregar}>+</button>
      <button onClick={() => onAdd(count)} disabled={count === 0}>
        Agregar al Carrito
      </button>
    </div>
  );
};
export default Count;
