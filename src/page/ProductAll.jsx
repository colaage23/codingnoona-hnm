import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url =
      "https://my-json-server.typicode.com/colaage23/codingnoona-hnm/products";
    const response = await fetch(url);
    const data = await response.json();
    const sorted = [...data].sort(
      (a, b) => (b.choice ? 1 : 0) - (a.choice ? 1 : 0),
    );
    setProductList(sorted);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-list">
      <Container>
        <Row>
          {productList.map((product) => (
            <Col key={product.id} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
