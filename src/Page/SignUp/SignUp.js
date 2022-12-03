import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const SignUp = () => {
  const [step, setStep] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div onSubmit={handleSubmit}>
      <h1 className="text-black text-center mb-12 text-2xl font-semibold">
        SignUp Form
      </h1>
      {step === 0 && (
        <>
          <Input name="firstName" type="text" placeholder="Write First Name" />
          <Input name="firstName" type="text" placeholder="Write Last Name" />
        </>
      )}
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 gap-x-2">
            <div className="col-span-1">
              <Input name="countryCode" type="number" placeholder="+880" />
            </div>
            <div className="col-span-3">
              <Input
                name="phoneNumber"
                type="number"
                placeholder="1xxxxxxxxxxx"
              />
            </div>
          </div>
          <Input name="email" type="email" placeholder="Write Email Address" />
        </form>
      )}
      {step === 2 && (
        <>
          <Input
            name="password"
            type="password"
            placeholder="Write Password"
            helpText="Your password must be 8 character"
          />
        </>
      )}

      <div className="text-center mt-10 relative">
        {step !== 0 && (
          <span
            className=" absolute left-3 top-3 font-bold cursor-pointer text-[#767676]"
            onClick={() => setStep(step - 1)}
          >
            back
          </span>
        )}
        {step !== 2 && (
          <button
            onClick={() => setStep(step + 1)}
            className="bg-[#1678CB] text-base border border-[#1678CB] hover:bg-white hover:text-[#1678CB] text-white px-[28px] py-[15px] cursor-pointer rounded-[15px]"
          >
            Next Step -
          </button>
        )}
        {step === 2 && (
          <>
            <Button title="Sign Up" type="submit" />
          </>
        )}
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
