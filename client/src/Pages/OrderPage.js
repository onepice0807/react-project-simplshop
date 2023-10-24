import React, { useContext } from "react";
import Type from "../components/Type";
import { ProductOrderContext } from "../context/ProductOrderContext";

const OrderPage = ({ setStep }) => {
  const [order] = useContext(ProductOrderContext);
  // console.log(order);
  return (
    <div>
      <h1>Products List</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div className="products-div" style={{ display: "flex", marginTop: 30 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div style={{ width: "50%" }}>
          <h2>
            Total Price(상품 + 옵션) :{" "}
            {Number(order.totals.total).toLocaleString()}
          </h2>
          <button onClick={() => setStep(1)}>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
