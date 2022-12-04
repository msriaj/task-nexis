import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [inputData, setInputData] = useState({
    first_name: "",
    last_Name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const submitFromToServer = async (e) => {
    e.preventDefault();
    setError("");
    setInputData({
      ...inputData,
      password: e.target.password.value,
    });
    console.log(inputData);
    const rawResponse = await fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
    const content = await rawResponse.json();
    const getError = await content.error;
    if (getError) {
      setError(getError);
    }
    const getSuccess = await content.sucess;
    if (getSuccess) {
      setSuccess(getSuccess);
    }
  };

  const nameHandler = (e) => {
    e.preventDefault();
    setInputData({
      ...inputData,
      first_name: e.target.firstName.value,
      last_Name: e.target.lastName.value,
    });
    setStep(step + 1);
  };

  const contactInfoHandler = (e) => {
    e.preventDefault();
    setInputData({
      ...inputData,
      phone_number: `+880${e.target.phoneNumber.value}`,
      email: e.target.email.value,
    });
    setStep(step + 1);
  };

  return (
    <div>
      <h1 className="text-black text-center mb-12 text-2xl font-semibold">
        SignUp Form
      </h1>
      {step === 0 && (
        <form onSubmit={nameHandler}>
          <Input
            name="firstName"
            type="text"
            placeholder="Write First Name"
            defaultValue={inputData.first_name}
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Write Last Name"
            defaultValue={inputData.last_Name}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#1678CB] flex justify-center text-base border border-[#1678CB] hover:bg-white hover:text-[#1678CB] text-white px-[28px] py-[15px] cursor-pointer rounded-[15px]"
            >
              Next Step{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </form>
      )}
      {step === 1 && (
        <form onSubmit={contactInfoHandler}>
          <div className="grid grid-cols-4 gap-x-2">
            <div className="col-span-1">
              <Input
                defaultValue="+880"
                name="countryCode"
                type="text"
                placeholder="+880"
              />
            </div>
            <div className="col-span-3">
              <Input
                name="phoneNumber"
                type="text"
                placeholder="1xxxxxxxxxxx"
                pattern="(?=.*\d).{8,}"
                defaultValue={inputData.phone_number}
              />
            </div>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Write Email Address"
            defaultValue={inputData.email}
          />
          <div className="text-center mt-10 relative flex justify-center">
            <span
              className="absolute left-3 top-3 font-bold cursor-pointer text-[#767676]"
              onClick={() => setStep(step - 1)}
            >
              back
            </span>
            <button
              type="submit"
              className="bg-[#1678CB] flex text-base border border-[#1678CB] hover:bg-white hover:text-[#1678CB] text-white px-[28px] py-[15px] cursor-pointer rounded-[15px]"
            >
              Next Step{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={submitFromToServer}>
          <Input
            name="password"
            type="password"
            placeholder="Write Password"
            helpText="Your password must be 8 character(only number)"
            pattern="(?=.*\d).{8,}"
          />
          <div className="text-center mt-10 relative">
            <span
              className=" absolute left-3 top-3 font-bold cursor-pointer text-[#767676]"
              onClick={() => setStep(step - 1)}
            >
              back
            </span>
            <button
              type="submit"
              className="bg-[#1678CB] text-base border border-[#1678CB] hover:bg-white hover:text-[#1678CB] text-white px-[28px] py-[15px] cursor-pointer rounded-[15px]"
            >
              Sign Up
            </button>
          </div>
        </form>
      )}
      <div className="text-center">
        <p className="text-red-400"> {error}</p>
        <p className="text-green-400">{success}</p>
      </div>
      <div className="pt-20 text-center">
        <p>
          <span className="text-xs text-[#7E7E7E]">
            Already have an account?{" "}
          </span>
          <Link to="/" className="underline ml-1 text-[#1678CB] font-semibold">
            LOGIN HERE!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
