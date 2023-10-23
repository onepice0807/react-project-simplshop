import React from "react";

const CompletePage = ({ setStep }) => {
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
        </tbody>
      </table>
      <button onClick={() => setStep(0)}>첫 페이지로</button>
    </div>
  );
};

export default CompletePage;
