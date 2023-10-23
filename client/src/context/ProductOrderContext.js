import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    // 위 두개의 State(상품 갯수, 상품 가격)를 변화시키는 함수
  }, [orderCounts]);

  const value = () => {
    // 위 두개의 State(상품 갯수, 상품 가격)를 변화시키는 함수 또한 Context를 통해 내려줘야 함
    return [{ ...orderCounts, ...totals }];
  };

  return <ProductOrderContext.Provider value={value} {...props} />;
}
