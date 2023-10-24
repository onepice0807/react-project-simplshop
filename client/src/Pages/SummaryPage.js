import React, { useState, useContext } from "react";
import { ProductOrderContext } from "../context/ProductOrderContext";

const SummaryPage = ({ setStep }) => {
  const [orderList] = useContext(ProductOrderContext);
  const productsArr = Array.from(orderList.products); // 배열로 변환하여 반환
  // console.log(productsArr);
  const productsList = productsArr.map(([key, value]) => {
    return (
      <li key={key}>
        {value}, {key}
      </li>
    );
  });

  const options = orderList.options.size > 0;

  let optionDisplay = null;
  if (options) {
    const optionOutPut = Array.from(orderList.options.keys()).map((key) => {
      return <li key={key}>{key}</li>;
    });

    optionDisplay = (
      <div>
        <div>옵션 이름 : {optionOutPut}</div>
        <div>옵션 가격 : {orderList.totals.total}</div>
      </div>
    );
  }

  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // 원래 가지고 있던 이벤트 해지
    setStep(2);
  };
  return (
    <div>
      <h1>주문 확인(결제)</h1>
      <h2>주문 상품 : </h2>
      <h2>옵션 상품 : </h2>
      <ul>{productsList}</ul>
      <div>{optionDisplay}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="confirm-checkbox">주문 정보를 확인하셨나요?</label>
        <br />
        <button type="submit" disabled={!checked}>
          결재 완료
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
