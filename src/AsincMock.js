const productos = [
  {
    id: "1",
    nombre: "Mate Polenta",
    categoria: "Regional",
    descripcion: "Mate Regional Gaucho",
    img: "../assets/Images/mate.jpg",
    precio: "1000",
  },
  {
    id: "2",
    nombre: "Bombiya larga",
    categoria: "Bombillas",
    descripcion: "Bombiya de Spiderman",
    img: "../assets/Images/bombilla.jpg",
    precio: "350",
  },
  {
    id: "3 ",
    nombre: "Yerbera autoctona Guarani",
    categoria: "Regional",
    descripcion: "Yerbera Pampeana",
    img: "../assets/Images/yerbera.jpg",
    precio: "500",
  },
];
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductosById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.find((prod) => {
          return prod.id === id;
        })
      );
    }, 500);
  });
};

export const getProductosByCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.filter((prod) => {
          return prod.categoria === categoriaId;
        })
      );
    }, 1000);
  });
};
