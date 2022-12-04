import React from "react";

const Input = ({
  type,
  placeholder,
  helpText,
  name,
  defaultValue,
  minLength,
  pattern,
  disabled,
}) => {
  return (
    <div className="py-6">
      <input
        className="bg-white text-[16px] text-[#B4B4B4] border-b border-b-[#B4B4B4] px-5 pb-1  w-full outline-0"
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        minLength={minLength}
        pattern={pattern}
        required
        disabled={disabled}
      />
      <p className="text-[#7E7E7E] mt-2  px-5 text-xs">{helpText}</p>
    </div>
  );
};

export default Input;
