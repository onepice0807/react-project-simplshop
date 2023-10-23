import React from "react";
import Type from "../components/Type";

const OrderPage = ({ setStep }) => {
  return (
    <div>
      <h1>Products List</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex", marginTop: 30 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div style={{ width: "50%" }}>
          <h2>Total Price</h2>
          <button onClick={() => setStep(1)}>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
