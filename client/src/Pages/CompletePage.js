import React, { useContext, useEffect, useState } from "react";
import { ProductOrderContext } from "../context/ProductOrderContext";
import axios from "axios";

const CompletePage = ({ setStep }) => {
  const [error, setError] = useState(false);
  const [orderList] = useContext(ProductOrderContext);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    orderComplete(orderList);
  }, [orderList]);

  const orderComplete = async (orderList) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/order",
        orderList
      );
      console.log(response);
      setOrderHistory(response.data);
    } catch {
      console.log(error);
      setError(true);
    }
  };

  const orderTable = orderHistory.map((item) => {
    return (
      <tr key={item.orderNumber}>
        <td>{item.orderNumber}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  console.log(orderTable);

  if (error) {
    return <div>error</div>;
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>주문이 성공했습니다</h2>
        <h3>지금까지의 모든 주문</h3>
        <table style={{ margin: "auto", border: "1px solid black" }}>
          <tbody>
            <tr>
              <th>주문 상품</th>
              <th>주문 수량</th>
              <th>가격</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <button onClick={() => setStep(0)}>첫 페이지로</button>
      </div>
    );
  }
};

export default CompletePage;
