import React from "react";
import styled from "styled-components";

const Products = ({
  name,
  imagePath,
  description,
  productCode,
  updateOrderList,
}) => {
  const handelQtyChange = (e) => {
    const qty = e.target.value;
    updateOrderList(productCode, qty);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>{productCode}</div>
      <img style={{ width: "100%" }} src={imagePath} alt={`${name}products`} />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>
          {name}
          <input
            type="number"
            name="qty"
            min="0"
            defaultValue={0}
            onChange={handelQtyChange}
          />
          <Description className="products-description">
            {description}
          </Description>
        </label>
      </form>
    </div>
  );
};

export default Products;

const Description = styled.p`
  border: 2px solid gray;
  border-radius: 3px;
  box-shadow: 1px 2px 2px 2px;
  text-align: center;
  padding: 5px;
`;
