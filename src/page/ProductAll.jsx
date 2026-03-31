import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductAll = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:5000/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-list">
      <ProductCard />
    </div>
  );
};

export default ProductAll;
