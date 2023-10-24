import { createContext, useEffect, useMemo, useState } from "react";

export const ProductOrderContext = createContext();
export function ProductOrderContextProvider(props) {
  console.log(props);
  const PricePerItem = {
    // 상품과 옵션의 각 가격 정보
    products: 10000,
    options: 1000,
  };

  // 상품(상품, 옵션)의 갯수를 담을 State
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  // 상품(상품, 옵션)의 가격을 담을 State
  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  const calculateSubtotal = (orderType, orderCounts) => {
    let qty = 0;
    for (const cnt of orderCounts[orderType].values()) {
      // 주문내역, 옵션 갯수 세기
      qty += cnt;
    }
    return qty * PricePerItem[orderType];
  };

  useEffect(() => {
    // 상품 주문내역(orderCounts)이 변하면 중간 계산을 해야 함
    const productsSubTotal = calculateSubtotal("products", orderCounts); // 상품 중간계산
    const optionsSubTotal = calculateSubtotal("options", orderCounts); // 옵션 중간계산

    setTotals({
      products: productsSubTotal,
      options: optionsSubTotal,
      total: productsSubTotal + optionsSubTotal,
    });
  }, [orderCounts]);

  const value = useMemo(() => {
    // 위 두개의 State(상품 갯수, 상품 가격)를 변화시키는 함수 또한 Context를 통해 내려줘야 함
    function updateOrderList(productCode, qty, orderType) {
      const oldMap = orderCounts[orderType]; // 이름이 orderType인 기존의 map을 가져옴
      const newOrderMap = new Map(oldMap); // 주소값이 달라지는 새로운 map 생성 (불변성)
      newOrderMap.set(productCode, parseInt(qty)); // 새로운 주문을 map에 추가

      const newOrderCounts = { ...orderCounts }; // 기존의 orderCounts를 깊은복사
      newOrderCounts[orderType] = newOrderMap; // 복사된 새로운 객체에 orderType 멤버에 새로운 주문 내역 넣어줌

      setOrderCounts(newOrderCounts); // State 업데이트
    }

    return [{ ...orderCounts, totals }, updateOrderList];
  }, [orderCounts, totals]);

  return <ProductOrderContext.Provider value={value} {...props} />;
}
