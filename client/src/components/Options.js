import React from "react";

const Options = ({ name, description }) => {
  return (
    <form>
      <label htmlFor={name}>
        <input type="checkbox" id={`${name}options`} />
        {name}
      </label>
    </form>
  );
};

export default Options;
