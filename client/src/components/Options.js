import React from "react";

const Options = ({ name, updateOrderList }) => {
  return (
    <form>
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={`${name}options`}
          onChange={(e) => updateOrderList(name, e.target.checked ? 1 : 0)}
        />
        {name}
      </label>
    </form>
  );
};

export default Options;
