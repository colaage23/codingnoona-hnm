import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);

  const getProductDetail = async () => {
    try {
      setLoading(true);
      const url = `https://my-json-server.typicode.com/colaage23/codingnoona-hnm/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      setSelectedSize(data?.size?.[0] || "");
    } catch (error) {
      console.error("상품 정보를 불러오지 못했습니다.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) return;

    alert(
      `${product?.title} / ${selectedSize} 사이즈가 장바구니에 담겼습니다.`,
    );
  };

  if (loading) {
    return (
      <Container className="loading-spinner-box">
        <ClipLoader color="#111111" size={50} />
      </Container>
    );
  }

  return (
    <Container className="product-detail">
      <Row>
        <Col lg={6} className="product-detail-image-div">
          <img
            className="product-detail-image"
            src={product?.img}
            alt={product?.title}
          />
        </Col>
        <Col lg={6}>
          {product?.choice && (
            <div className="product-choice">Conscious Choice</div>
          )}
          <h2 className="product-detail-title">{product?.title}</h2>
          <p className="product-detail-price">
            {product && product?.price.toLocaleString("ko-KR")}원
          </p>

          <div className="size-select-box">
            <label htmlFor="size-select" className="size-label">
              사이즈
            </label>
            <select
              id="size-select"
              className="size-select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product?.size?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <button className="add-cart-button" onClick={handleAddToCart}>
            장바구니 추가
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
