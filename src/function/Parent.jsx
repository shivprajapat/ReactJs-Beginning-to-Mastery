import React from "react";
import Child from "./Child";

const Parent = () => {
  function clickMe(message) {
    alert(`Click to ${message}`);
  }
  return (
    <div>
      <h5>Parent</h5>
      <Child clickMe={clickMe} />
    </div>
  );
};

export default Parent;
