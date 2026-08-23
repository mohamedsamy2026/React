import { useState } from "react";

export default function ShoppingCart() {
  const initialProducts = [
    {
      id: 0,
      name: "Baklava",
      count: 1,
    },
    {
      id: 1,
      name: "Cheese",
      count: 5,
    },
    {
      id: 2,
      name: "Spaghetti",
      count: 2,
    },
  ];
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    let newData = products.map((product) => {
      if (productId == product.id) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
    setProducts(newData);
  }

  function handleUncreaseClick(id) {
    let newData = products.map((product) => {
      if (product.id == id) {
        if (product.count > 1) {
          return { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      } else {
        return product;
      }
    });
    setProducts(newData);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} <b>{product.count}</b>
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleUncreaseClick(product.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
