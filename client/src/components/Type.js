import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`);
      console.log(response.data);
      setItems(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const ItemComponent = orderType === "products" ? Products : Options;

  const Items = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      description={item.description}
    />
  ));

  return (
    <div>
      <h2>{orderType} 주문</h2>
      <p>{orderType} 하나의 가격</p>
      <p>총 가격 : </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
          justifyContent: "space-around",
          gap: 20,
        }}
      >
        {Items}
      </div>
    </div>
  );
};

export default Type;
