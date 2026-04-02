import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ProductCard from "./ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      setLoading(true);
      const searchQuery = query.get("q") || "";
      const url = `https://my-json-server.typicode.com/colaage23/codingnoona-hnm/products?q=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      const sorted = [...data].sort(
        (a, b) => (b.choice ? 1 : 0) - (a.choice ? 1 : 0),
      );
      setProductList(sorted);
    } catch (error) {
      console.error("상품 목록을 불러오지 못했습니다.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  if (loading) {
    return (
      <Container className="loading-spinner-box">
        <ClipLoader color="#111111" size={50} />
      </Container>
    );
  }

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
