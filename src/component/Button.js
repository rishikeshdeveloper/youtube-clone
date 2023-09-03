import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-1 m-3 bg-gray-200 rounded-lg mr-0">
        {name}
      </button>
    </div>
  );
};

export default Button;
