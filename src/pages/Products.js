import { useEffect, useState } from "react";
import styles from "./Product.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h2>Product Page</h2>
      <div>
        {products.map((each) => (
          <div key={each.id}>
            <h6>{each.category}</h6>
            <p>{each.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
