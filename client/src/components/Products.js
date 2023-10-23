import React from "react";

const Products = ({ name, imagePath, description }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "100%" }} src={imagePath} alt={`${name}products`} />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>
          {name}
          <input
            style={{ marginLeft: "7px" }}
            type="number"
            name="qty"
            min="0"
            defaultValue={0}
          />
        </label>
      </form>
    </div>
  );
};

export default Products;
