import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>
      <img
        className="product-image"
        src={
          product?.img ||
          "https://image.hm.com/assets/hm/9c/32/9c322444cf266d35d718084bbee5e94db0ea7c25.jpg?imwidth=384"
        }
        alt={product?.title}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />
      {product?.choice && (
        <div className="product-choice-absolute">Conscious Choice</div>
      )}
      <div className="product-info-overlay">
        <div className="product-name">{product?.title}</div>
        <div className="product-price">
          {(product?.price).toLocaleString("ko-KR")}원
        </div>
        {product?.new && <div className="product-badge"> 신제품</div>}
      </div>
    </div>
  );
};

export default ProductCard;
