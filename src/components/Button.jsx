import React from "react";

function Button({ children, handleClick }) {
  return (
    <button className="button_primary " onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
