import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListConteiner from "./Componentes/ItemListConteiner/ItemListConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./Componentes/ItemDetailConteiner/ItemDetailConteiner";
import Button from "./Componentes/Buttons/Button";
import Cart from "./Componentes/Cart/Cart";
import { CartProvider } from "./Componentes/Context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar color="red" />
          <Button />
          <Routes>
            <Route path="/" element={<ItemListConteiner />} />
            <Route
              path="/categoria/:catId"
              element={<ItemListConteiner wellcome="Listado de Productos" />}
            />
            <Route path="/detail/:prodId" element={<ItemDetailConteiner />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
