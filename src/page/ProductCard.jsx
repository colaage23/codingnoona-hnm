import React from "react";

const ProductCard = ({ product }) => {
  const name = product?.title || "벨티드 트월 코드";
  const price = product?.price || 99000;

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={
          product?.img ||
          "https://image.hm.com/assets/hm/9c/32/9c322444cf266d35d718084bbee5e94db0ea7c25.jpg?imwidth=384"
        }
        alt={name}
      />
      <div className="product-info-overlay">
        <div className="product-name">벨티드 트월 코드</div>
        <div className="product-price">99,000원</div>
        <div className="product-badge">신제품</div>
      </div>
    </div>
  );
};

export default ProductCard;
