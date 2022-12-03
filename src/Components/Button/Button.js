import React from "react";

const Button = ({ title, type }) => {
  return (
    <input
      className="bg-[#1678CB] text-base border border-[#1678CB] hover:bg-white hover:text-[#1678CB] text-white px-[28px] py-[15px] cursor-pointer rounded-[15px]"
      value={title}
      type={type}
    />
  );
};

export default Button;
