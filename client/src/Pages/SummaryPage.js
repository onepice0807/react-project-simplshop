import React, { useState } from "react";

const SummaryPage = ({ setStep }) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // 원래 가지고 있던 이벤트 해지
    setStep(2);
  };
  return (
    <div>
      <h1>주문 확인(결제)</h1>
      <h2>상품 : </h2>

      <from onSubmit={handleSubmit}>
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
      </from>
    </div>
  );
};

export default SummaryPage;
