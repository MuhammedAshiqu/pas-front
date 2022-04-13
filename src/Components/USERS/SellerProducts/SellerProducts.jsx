import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardS from "../Card/Card";

function SellerProducts() {
  const [products, setProducts] = useState([]);

  const { email } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `ttps://productsandservices.herokuapp.com/products/${email}`
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="map-items">
        {products.length < 1 ? (
          <h1>No products Found!.</h1>
        ) : (
          products.map((i) => {
            return <CardS setres={i.length} i={i} />;
          })
        )}
      </div>
    </div>
  );
}

export default SellerProducts;
